import express from "express";
import dotenv from "dotenv";
import categoryRoutes from "./routes/categoryRoutes.js"

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use("/api/categories", categoryRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
