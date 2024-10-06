

import { DataTypes } from 'sequelize'
import User from './user.model.js'
import { sequelize } from '../connection.js'

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
    , autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{
  timestamps: true
})

User.hasMany(Post,
  {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  
  }
)
Post.belongsTo(User)

export default Post