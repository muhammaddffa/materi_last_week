import { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import { uploadFileToAPI } from '../controllers/uploudFileContoller';

const storage = multer.memoryStorage(); 
const upload = multer({ storage });

export const uploadFile = upload.single('file'); 

export const uploadFileHandler = async (req: Request, res: Response, next: NextFunction) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    const data = await uploadFileToAPI(file.buffer, file.originalname);
    return res.json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
