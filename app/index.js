import express from "express";
import dotenv from "dotenv";
import categoryRoutes from "./routes/categoryRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import { connectDb } from "./config/dbConnection.js";

dotenv.config();
connectDb();
const app = express();

app.use(express.json());
app.use("/api/categories", categoryRoutes);
app.use(errorHandler);

export { app };
