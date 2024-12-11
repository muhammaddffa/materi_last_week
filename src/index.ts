import express from "express";
import dotenv from "dotenv";
import registerRoutes from "./routes/registerRoutes";
import loginRoutes from "./routes/loginRoutes";
import uploadRoutes from "./routes/uploudFileRoutes";
import authorRoutes from "./routes/author/authorRoutes";
import bookRouter from "./routes/book/bookRoutes";
import genreRouter from "./routes/genre/genreRoutes";
import userRoutes from "./routes/userRoutes";
const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    message: "Hello, TypeScript Node Express!",
  });
});

app.use("/auth/register", registerRoutes);
app.use("/auth/login", loginRoutes);
app.use("/api/users", userRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/author", authorRoutes);
app.use("/api/book", bookRouter);
app.use("/api/genre", genreRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
