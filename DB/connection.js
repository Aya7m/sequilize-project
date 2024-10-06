
import { Sequelize} from 'sequelize'
export const sequelize = new Sequelize("mysql://u6vlzcdxndaoejux:42hPnvvC3EXtJADfQOI0@bmorjksmjiwpmccgc1yn-mysql.services.clever-cloud.com:3306/bmorjksmjiwpmccgc1yn")

export const dbConnection_db = async () => {
  try {
    await sequelize.sync({alter:true})
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.log('Unable to connect to the database:', error)
  }
}
