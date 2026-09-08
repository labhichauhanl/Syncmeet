import express from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connectToSocket from "./backend/src/controllers/socketManager.js";
import userRoutes from "./backend/src/routes/usersroutes.js";

dotenv.config();

const app = express();
const server = createServer(app);

connectToSocket(server);

app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to MongoDB");

    server.listen(8000, () => {
        console.log("Server is listening on port 8000");
    });
};

start();