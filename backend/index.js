require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nuqw3.mongodb.net/loop-talk?retryWrites=true&w=majority&appName=Cluster0`)
.then(res =>{
    console.log("mongoose connect");
})
.catch(error =>{
    console.log(error);
})

const authRoutes = require("./routes/auth.routes.js");
const messageRoutes = require("./routes/message.routes.js");
const userRoutes = require("./routes/user.routes.js");
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.get('/', async(req, res) =>{
    res.send("Loop Talk server is running");
})
app.listen(port, () =>{
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