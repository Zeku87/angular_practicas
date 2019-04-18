// Definición del esquema del modelo de datos

const mongoose = require('mongoose');

// Mongo provee un campo _id por defecto al esquema
const schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true,
        enum: ['Alta', 'Media', 'Baja']
    }
});