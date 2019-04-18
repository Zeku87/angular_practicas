//dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database.js');

//instance of express server
const app = express();

//port
const port = 3001;

//CORS middleware for all routes
//https://expressjs.com/en/resources/middleware/cors.html
app.use(cors());

//body-parser middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

//public folder is for static files
app.use(express.static(path.join(__dirname, 'public')));

//Establecimiento de conexión con la base de datos mediante mongoose
//Let's establish conection with the databse using mongoose
//https://mongoosejs.com/
mongoose.connect(config.database);

//example of a route
app.get('/ruta', (req, res) => {
    res.send("Esta ruta no contiene información")
});

//listening 
app.listen(port, () => {
    console.log(`Listening at ${port}`)
})