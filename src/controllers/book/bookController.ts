import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const bookClient = prisma.book;

export const getAllBooks = async (req, res) => {
  try {
    const allBooks = await bookClient.findMany();
    res.status(200).json({ data: allBooks });
  } catch (e) {
    console.log(e);
  }
};

export const getBookById = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await bookClient.findUnique({
      where: { id: bookId },
    });
    res.status(200).json({ data: book });
  } catch (e) {
    console.log(e);
  }
};

export const createBook = async (req, res) => {
  try {
    const { title, authorId, genreId } = req.body;

    const book = await bookClient.create({
      data: {
        title,
        author: {
          connect: { id: authorId },
        },
        genre: {
            connect: {id: genreId}
        }
      },
    });

    res.status(201).json({ data: book });
  } catch (e) {
    console.log(e);
  }
};

export const updateBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const { title, authorId, genreId } = req.body;

    const book = await bookClient.update({
      where: { id: bookId },
      data: {
        title,
        author: {
          connect: { id: authorId },
        },
        genre: {
            connect: {id: genreId}
        }
      },
    });

    res.status(200).json({ data: book });
  } catch (e) {
    console.log(e);
  }
};

export const deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;

    const book = await bookClient.delete({
      where: { id: bookId },
    });

    res.status(200).json({ data: book });
  } catch (e) {
    console.log(e);
  }
};