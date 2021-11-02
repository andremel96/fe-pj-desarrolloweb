const express = require ("express");
const app=express();
const fileUpload= require("express-fileupload");
const cors = require("cors");

app.use(fileUpload());
app.use(cors());
app.use(express.json());

app.get("/",(req, res)=>{
    res.send("hello");
});

app.get("/upload",(req, res)=>{
   console.log(req.files.file);
   res.send(`archivo ${req.files.file.name} subio correctamente al servidor`);
});

app.listen(3000, ()=>{
    console.log("puerto 3000");
});