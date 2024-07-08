import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const newBooking = async(req, res) => {
    const user = req.user
    const {  date, location, number, service } = req.body;
    const userId = user.id

    try {
        const newBooking = await prisma.bookings.create({
            data: {
                date: date,
                location: location,
                number: number,
                service: service,
                userId: userId
            }
        })
        res.status(201).json({ success: true, data: newBooking })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}