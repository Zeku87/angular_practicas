//dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

//instance of express server
const app = express();

//port
const port = 3001;

//CORS middleware for all routes
app.use(cors());

//body-parser middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

//public folder is for static files
app.use(express.static(path.join(__dirname, 'public')));

//example of a route
app.get('/ruta', (req, res) => {
    res.send("Esta ruta no contiene información")
});

//listening 
app.listen(port, () => {
    console.log(`Listening at ${port}`)
})