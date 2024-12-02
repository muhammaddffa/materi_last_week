import { Request, Response } from "express";
import { uploadImageToCloudinary } from "./uploadService";

export const uploadImageHandler = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file provided" });
    }

    const result = await uploadImageToCloudinary(
      req.file.buffer,
      req.file.originalname
    );

    res
      .status(200)
      .json({
        message: "Image uploaded successfully",
        imageUrl: result.imageUrl,
      });
  } catch (error: any) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};
