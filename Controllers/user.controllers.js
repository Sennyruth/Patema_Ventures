import bcrypt from "bcrypt";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient;
export const createUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newuser = await prisma.user.create({
      data: {
        firstname,
        lastname,
        email,
        password: hashedPassword,
      },
    });
    res.json(newuser);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
