import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const prisma = new PrismaClient();
const User = prisma.user;

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await User.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      },
    });
    res.status(201).send({
      data: result,
      message: `User succesfully for register`,
    });
  } catch (e) {
    res.status(500).send({
      message: "Error creating user",
      error: e.message,
    });
  }
};

