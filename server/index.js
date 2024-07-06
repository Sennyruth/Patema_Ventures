import express from 'express'
import usersRouter from './routes/user.routes.js'

const app = express();

app.use("/register",usersRouter)
app.listen(3003,() => {
    console.log('server is running on port 3003')
})