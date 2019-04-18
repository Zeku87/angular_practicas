//todas las rutas de la aplicación se encontrarán aquí

//dependencias
const express = require('express');

//con el objeto router podremos manejar solicitudes HTTP con GET, POST, DELETE. etc,..
const router = express.Router();

//petición GET
router.get('/home', (req, res) => {
    res.send('Ruta /lista/home')
});

//petición POST
router.post('/post', (req, res, next) => {
    res.send('Ruta que contiene una solicitud POST')
});

//petición PUT
router.put('/put', (req, res) => {
    res.send('Ruta que sostiene un solicitud put para el servidor')
});

//petición DELETE
router.delete('/delete', (req, res, next) => {
    res.send('Ruta donde se solicita el borrado')
})

//exportamos el objeto router
//en app.js se importará mediante require
module.exports = router;