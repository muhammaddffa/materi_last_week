import express from "express";
import { getAllAuthors } from "../controllers/authorController";

const router = express.Router();

router.get("/", getAllAuthors);

export default router;