import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import {connectToSocket} from "./backend/src/controllers/socketManager"
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit: "40kb", extended: true}));


const start = async ()=>{
    const connectionDb = await mongoose.connect("mongodb+srv://abhichauhan4804:zv2mzEDacSJephQ6@cluster1.fgdszp5.mongodb.net/?appName=Cluster1")
    console.log("Connected to MongoDb")
    app.listen(8000, ()=>{
        console.log("Server is listening on port 3000");
    })
};
start();









