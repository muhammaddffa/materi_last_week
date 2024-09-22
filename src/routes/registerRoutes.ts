import express, { Router } from 'express';
import {  registerUser } from '../controllers/registerController';

const router: Router = express.Router();

router.post("/", registerUser);

export default router;