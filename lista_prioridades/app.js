//dependencias
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database.js');
const controller = require('./controllers/controller')
//creamos una instancia del servidor express
const app = express();

//puerto
const port = 3001;

//CORS middleware para todas las rutas
//https://expressjs.com/en/resources/middleware/cors.html
app.use(cors());

//body-parser middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

//public folder is for static files
app.use(express.static(path.join(__dirname, 'public')));

//Establecimiento de conexión con la base de datos mediante mongoose
//https://mongoosejs.com/
mongoose.connect(config.database);

//ejemplo de ruta en la que se hace una petición http
//en el objeto req se almacena la solicitud
//en el objeto res se almacena la respuesta
app.get('/ruta', (req, res) => {
    res.send("Esta ruta no contiene información")
}); 

//El enrutado para las solicitudes HTTP van en el controlador
//Todas estas rutas estarán precedidas por /lista
app.use('/lista', controller);

//escuchando el puerto especificado
app.listen(port, () => {
    console.log(`Listening at ${port}`)
})