import express from "express";
import dotenv from "dotenv";
import registerRoutes from "./routes/registerRoutes";
import loginRoutes from "./routes/loginRoutes";
import uploadRoutes from "./routes/uploudFileRoutes"; 
const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, TypeScript Node Express!");
});

app.use("/auth/register", registerRoutes);
app.use("/auth/login", loginRoutes);

app.use("/api/upload", uploadRoutes); 


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
