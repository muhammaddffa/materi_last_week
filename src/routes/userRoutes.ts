import express, { Router } from 'express';
import {  createUser, getAllUser } from '../controllers/userController';
import accessValidation from '../middleware/authMiddleware';

const router: Router = express.Router();

router.post("/", createUser);
router.get("/", accessValidation, getAllUser)

export default router;