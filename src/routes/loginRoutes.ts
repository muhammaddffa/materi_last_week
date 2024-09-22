import express, { Router } from 'express';
import {  loginUser } from '../controllers/loginController';

const router: Router = express.Router();

router.post("/", loginUser); 

export default router;