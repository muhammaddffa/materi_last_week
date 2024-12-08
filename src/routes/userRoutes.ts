import express, { Router } from 'express';
import {  createUser, getAllUser } from '../controllers/userController';
import accessValidation from '../middleware/authMiddleware';

const userRoutes = Router();

userRoutes.post("/", createUser);
userRoutes.get("/", accessValidation, getAllUser)

export default userRoutes;