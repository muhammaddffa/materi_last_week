import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const prisma = new PrismaClient();
const User = prisma.user;

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (!user.password) {
      return res.status(404).json({
        message: "Password not set",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      const payload = {
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      };

      const secret = process.env.JWT_SECRET as string;

      const expiresIn = 60 * 60 * 1;

      const token = jwt.sign(payload, secret, { expiresIn });

      return res.json({
        data: {
          id: user.id,
          email: user.email,
        },
        token: token,
      });
    } else {
      return res.status(403).json({
        message: "Wrong password",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
