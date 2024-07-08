import express from 'express';
import {config} from 'dotenv';
import usersRouter from './routes/user.routes.js'
import bookingRouter from './routes/booking.routes.js'
import cors from 'cors';
import cookieParser from 'cookie-parser'; 

config();
const app = express();
app.use(cors(
    {
        origin: "http://localhost:5174",
        methods:["GET","POST","PATCH","DELETE"],
        credentials: true,
    }
));
app.use(express.urlencoded({extended:true}))

app.use(express.json())
app.use(cookieParser())
app.use("/api/user",usersRouter)
app.use("/api/user",bookingRouter)
app.listen(3000,() => {
    console.log('server is running on port 3000')
})