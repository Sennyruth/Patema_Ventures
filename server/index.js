import express from 'express';
import {config} from 'dotenv';
import usersRouter from './routes/user.routes.js'


config();
const app = express();

app.use("/api/user",usersRouter)
app.listen(3000,() => {
    console.log('server is running on port 3000')
})