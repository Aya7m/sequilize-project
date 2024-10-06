

import { DataTypes } from 'sequelize'
import { sequelize } from '../connection.js'

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
    , autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(100)
    , allowNull: false
  },
  email: {
    type: DataTypes.STRING
    , allowNull: false
    , unique: true
  },
  password: {
    type: DataTypes.STRING
    , allowNull: false
  },
  isLogin: {
    type: DataTypes.BOOLEAN
    , allowNull: false
    , defaultValue: false
  },
  
 
}, {
  timestamps: true
})

export default User