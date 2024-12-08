import { Router } from "express";
import { getAllGenres, createGenre, getGenreById, updateGenre } from "../../controllers/genre/genreController";

const genreRouter = Router();

genreRouter.get("/", getAllGenres);
genreRouter.post("/", createGenre);
genreRouter.get("/:id", getGenreById);
genreRouter.patch("/:id", updateGenre);

export default genreRouter;