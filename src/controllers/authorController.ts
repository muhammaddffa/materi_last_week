import { PrismaClient } from "@prisma/client";

const authorClient = new PrismaClient().author;

export const getAllAuthors = async (req, res) => {
  try {
    const allAuthors = await authorClient.findMany({
      include: {
        books: true,
      },
    });
    res.status(201).send({
      data: allAuthors,
    });
  } catch (e) {
    console.log(e);
  }
};

export const createAuthor = async (req, res) => {
  try {
    const authorData = req.body;
    const author = await authorClient.create({
      data: authorData,
    });
    res.status(201).send({
      data: author,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAuthorByid = async (req, res) => {
  try {
    const authorId = req.params.id;
    const author = await authorClient.findUnique({
      where: {
        id: authorId,
      },
      include: {
        books: true,
      },
    });
    res.status(200).send({
      data: author,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateAuthor = async (req, res) => {
  try {
    const authorId = req.params.id;
    const authorData = req.body;

    const author = await authorClient.update({
      where: {
        id: authorId
      },
      data: authorData
    })
    res.status(200).send({
      data: author
    })
  } catch (error) {
    console.log(error)
  }
};
