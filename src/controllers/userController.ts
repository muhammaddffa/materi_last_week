import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();
const User = prisma.user;

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, password, email } = req.body;
    if (!password || !email) {
      return res.status(404).json({
        message: "password and email can't be empty",
      });
    }
    const result = await User.create({
      data: {
        name,
        email,
        password,
      },
    });
    res.status(201).send({
      data: result,
      message: "User created successfully",
    });
  } catch (error:any) {
    res.status(500).send({
        message: "Error creating user",
        error: error.message,
      });
  }
};


export const getAllUser = async (req: Request, res: Response) => {
  try {
    const result =  await User.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true
      }
    })

    res.status(201).send({
      data: result,
      message: "Get all User Successfully"
    })
  } catch (error: any) {
    res.status(500).send({
      message: "error getting users",
      error: error.message
    })
  }
}
