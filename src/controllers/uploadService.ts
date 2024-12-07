import axios from "axios";
import FormData from "form-data";

const UPLOAD_API_BASE_URL = "http://localhost:4000/upload";

export const uploadImageToCloudinary = async (imageBuffer: Buffer, filename: string) => {
  try {1
    const formData = new FormData();
    formData.append("image", imageBuffer, filename);

    const response = await axios.post(UPLOAD_API_BASE_URL, formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });

    return response.data;
  } catch (error: any) {
    console.error("Error uploading image:", error.message);
    throw new Error(error.response?.data?.error || "Failed to upload image");
  }
};
