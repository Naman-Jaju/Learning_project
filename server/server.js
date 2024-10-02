require("dotenv").config(); 
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./db/index.js");


const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  });

app.use(express.json());
app.use(cors());

connectDB();

app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).json({
        success : false,
        message : 'Something went wrong',
    });
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
})