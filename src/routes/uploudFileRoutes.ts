import express from "express";
import { uploadImageHandler } from "../controllers/uploudFileContoller";
import uploadMiddleware from "../middleware/uploadFileMiddleware";

const router = express.Router();

router.post("/", uploadMiddleware.single("image"), uploadImageHandler);

export default router;
