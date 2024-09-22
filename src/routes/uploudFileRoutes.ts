import express, { Router } from 'express';
import { uploadFile, uploadFileHandler } from '../middleware/uploadFileMiddleware';

const router: Router = express.Router();

router.post("/", uploadFile, uploadFileHandler); 

export default router;
