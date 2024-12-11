import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const genreClient = prisma.genre;

export const getAllGenres = async (req, res) => {
  try {
    const allGenres = await genreClient.findMany({
      include: {
        books: true,
      },
    });
    res.status(200).send({ data: allGenres });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error retrieving genres" });
  }
};

export const createGenre = async (req, res) => {
  try {
    const { name } = req.body;
    const newGenre = await genreClient.create({
      data: { name },
    });
    res.status(201).send({ data: newGenre });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error creating genre" });
  }
};

export const getGenreById = async (req, res) => {
  try {
    const genreId = req.params.id;
    const genre = await genreClient.findUnique({
      where: { id: genreId },
      include: {
        books: true,
      },
    });
    if (genre) {
      res.status(200).send({ data: genre });
    } else {
      res.status(404).send({ message: "Genre not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error retrieving genre" });
  }
};

export const updateGenre = async (req, res) => {
  try {
    const genreId = req.params.id;
    const genreData = req.body;
    const updatedGenre = await genreClient.update({
      where: { id: genreId },
      data: genreData,
    });
    res.status(200).send({ data: updatedGenre });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error updating genre" });
  }
};
