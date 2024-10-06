import express from 'express'
import { dbConnection_db } from './DB/connection.js'
import userRouter from './src/modules/user/user.routes.js'
import postRouter from './src/modules/post/post.routes.js'





const app = express()
const port = 8080;
app.use(express.json())

dbConnection_db();

app.use('/',userRouter)
 
app.use('/',postRouter)




app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))