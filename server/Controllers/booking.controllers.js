import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const newBooking = async (req, res) => {
  const user = req.user;
  const { date, location, number, service } = req.body;
  const userId = user.id;

  try {
    const newBooking = await prisma.bookings.create({
      data: {
        date: date,
        location: location,
        number: number,
        service: service,
        userId: userId,
      },
    });
    res.status(201).json({ success: true, data: newBooking });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const allBookings = async (req, res) => {
  try {
    const booking = await prisma.bookings.findMany();
    res.status(200).json({ success: true, data: booking });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const specificBookings = async (req,res) => {
  const user = req.user;
  const userId = user.id;
  try {
    const booking = await prisma.bookings.findMany({where:{userId:userId},
      select: {
        id: true,
        date: true,
        location: true,
        number: true,
        service: true,
        userId: true,
      },
    })
    res.status(200).json({success:true,data:booking})
 
  } catch (error) {
    res.status(500).json({success:false,message:error.message})


    
  }
}