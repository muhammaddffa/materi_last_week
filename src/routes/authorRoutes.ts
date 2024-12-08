import express from "express";
import { createAuthor, getAllAuthors, getAuthorByid, updateAuthor } from "../controllers/authorController";

const authorRouter = express.Router();

authorRouter.get("/", getAllAuthors);
authorRouter.post("/", createAuthor);
authorRouter.get("/:id", getAuthorByid);
authorRouter.patch("/:id", updateAuthor)

export default authorRouter;