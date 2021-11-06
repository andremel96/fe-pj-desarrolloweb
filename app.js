const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const cors = require("cors");
const axios=require("axios");

const path = require("path");

app.use(fileUpload());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const PORT = process.env.PORT || 3000;

console.log(path.join(__dirname, '/', 'public'))
app.use(express.static(path.join(__dirname, '/', 'public')));

app.get('/', function (req, res) {
    res.sendFile('public/login.html', { root: __dirname });
});
app.get('/cursos', function (req, res) {
    res.sendFile('public/cursos.html', { root: __dirname });
});

app.get('/menu', function (req, res) {
    res.sendFile('public/MENU.HTML', { root: __dirname });
});

app.get('/notas', function (req, res) {
    res.sendFile('public/notas.html', { root: __dirname });
});

app.get('/actividades', function (req, res) {
    res.sendFile('public/actividades.html', { root: __dirname });
});
app.get('/usuarios', function (req, res) {
    res.sendFile('public/Usuarios.html', { root: __dirname });
});

app.get("/upload", (req, res) => {
    console.log(req.files.file);
    res.send(`archivo ${req.files.file.name} subio correctamente al servidor`);
});
const url='https://be-pj-desarrolloweb.herokuapp.com/';



app.listen(PORT, () => {
    console.log("Servidor inciado en el puerto: " + PORT);
});