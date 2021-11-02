const express = require ("express");
const app=express();
const fileUpload= require("express-fileupload");
const cors = require("cors");

const path = require("path");

app.use(fileUpload());
app.use(cors());
app.use(express.json());
const PORT=process.env.PORT || 3000;

console.log(path.join(__dirname, '/', 'public'))
app.use(express.static(path.join(__dirname, '/', 'public')));

app.get('/', function(req, res){
    res.sendFile('public/login.html',{root: __dirname});
});

app.get("/upload",(req, res)=>{
   console.log(req.files.file);
   res.send(`archivo ${req.files.file.name} subio correctamente al servidor`);
});

app.listen(PORT, ()=>{
    console.log("Servidor inciado en el puerto: "+PORT);
});