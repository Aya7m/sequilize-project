
import { DataTypes } from 'sequelize'

import User from './user.model.js'
import { sequelize } from '../connection.js'
import Post from './post.model.js'

const Comment = sequelize.define('Comment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
    , autoIncrement: true
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
 
},{
  timestamps: true
})

User.hasMany(Comment,
  {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  
  }
)

Post.hasMany(Comment,
  {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
)
Comment.belongsTo(User)
Comment.belongsTo(Post)



export default Comment