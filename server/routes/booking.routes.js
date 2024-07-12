import { Router } from "express";
const route = Router()
import { newBooking } from "../Controllers/booking.controllers.js";
import { allBookings, specificBookings } from "../Controllers/booking.controllers.js";
import { verifyToken } from "../middlewares/verifyToken.js";

route.post('/booking', verifyToken, newBooking)
route.get('/booking',allBookings)
route.get('/specificBooking',verifyToken,specificBookings)


export default route