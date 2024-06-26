const express = require("express");

const app = express();

require('dotenv').config()

const multer = require("multer");

const path = require("path");

const PORT = process.env.PORT ;


console.log(PORT);

app.get("/",(req,res)=>{
    res.send({code:200,message:"Usado correctamente"});
})

app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}`);
})