//todas las rutas de la aplicación se encontrarán aquí

//dependencias
const express = require('express');
const db = require('../models/model');

//con el objeto router podremos manejar solicitudes HTTP con GET, POST, DELETE. etc,..
const router = express.Router();

//Ejemplos de solicitudes HTTP que podemos probar con POSTMAN
//petición GET
router.get('/home', (req, res) => {
    res.send('Ruta /lista/home')
});

//petición POST
router.post('/post', (req, res) => {
    res.send('Ruta que contiene una solicitud POST')
});

//petición PUT
router.put('/put', (req, res) => {
    res.send('Ruta que sostiene un solicitud put para el servidor')
});

//petición DELETE
router.delete('/delete', (req, res) => {
    res.send('Ruta donde se solicita el borrado')
})

//En la ruta '/' pedimos al modelo los datos de la colección
router.get('/', (req, res) => {
    db.getAllList((err, collection) => {
        if(err){
            res.send(err);
        }else{
            res.send("Coleccion:\n" + JSON.stringify(collection))
        }
    })
})


//exportamos el objeto router
//en app.js se importará mediante require
module.exports = router; 