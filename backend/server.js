import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import { connect } from "mongoose";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT =process.env.PORT || 5000;

app.use(express.json()); // to parse req.body



app.get("/", (req, res) => {
    res.send("Welcome to the server!");
});

app.use("/api/auth",authRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
});