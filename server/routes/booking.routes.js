import { Router } from "express";
const route = Router()
import { newBooking } from "../Controllers/booking.controllers.js";
import { verifyToken } from "../middlewares/verifyToken.js";

route.post('/booking', verifyToken, newBooking)

export default route