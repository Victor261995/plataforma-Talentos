import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.mjs";

import authRoutes from "./routes/authRoutes.mjs";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "API funcionando",
  });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});