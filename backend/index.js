require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nuqw3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(res =>{
    console.log("mongoose connect");
})
.catch(error =>{
    console.log(error);
})

const authRoutes = require("./routes/auth.routes.js");
app.use('/api/auth', authRoutes);

app.get('/', async(req, res) =>{
    res.send("Loop Talk server is running");
})
app.listen(port, () =>{
    console.log(`Server is running on Port ${port}`);
})