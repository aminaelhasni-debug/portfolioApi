// calling the express and momgoose

const express = require("express");
const mongoose = require("mongoose");
const skillContorller = require("./controllers/skillController");
require('dotenv').config(); 

const PORT = process.env.PORT || 5000;


// allows json to read and accept data 

const app =  express();
app.use(express.json());

// connect mongoose

mongoose.connect(process.env.dbconnect)
.then (()=> console.log("done"))
.catch(() => console.log("error"));

app.listen(5000, () => { console.log ("server is runing in port 5000")});

// router

app.use("/", skillContorller);
app.get("/test", (req, res) => {
    res.send("hello test page")
});