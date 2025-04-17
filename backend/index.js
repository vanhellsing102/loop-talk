// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config();
import express from "express";
// const app = express();
import { server, app } from "./socket/socket.js";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
const port = process.env.PORT || 3000;

app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}));

app.use(cookieParser());
app.use(express.json());

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nuqw3.mongodb.net/loop-talk?retryWrites=true&w=majority&appName=Cluster0`)
.then(res =>{
    console.log("mongoose connect");
})
.catch(error =>{
    console.log(error);
})

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.get('/', async(req, res) =>{
    res.send("Loop Talk server is running");
})
server.listen(port, () =>{
    console.log(`Server is running on Port ${port}`);
})

// error handler------------------------------------------------
app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).send({
        success: false,
        statusCode,
        message
    })
})