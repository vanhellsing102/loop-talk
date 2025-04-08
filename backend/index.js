require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', async(req, res) =>{
    res.send("Loop Talk server is running");
})
app.listen(port, () =>{
    console.log(`Server is running on Port ${port}`);
})