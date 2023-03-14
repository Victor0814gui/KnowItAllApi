import "dotenv";
import express from "express";
import { Routes } from "./routes";
const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use(Routes);

app.listen(PORT,() => {
  console.log(`💥server is running on port ${PORT}`)
})