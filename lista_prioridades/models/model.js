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

//damos nombre a la coleccion de datos que surgirá del esquema
//y almacenamos dicha coleccion en un variable para usarla posteriormente
let collectionList = mongoose.model('lista_colleccion', schema);

//exportamos el esquema
module.exports = collectionList

//exportamos métodos que realizan consultas sobre la coleccion de datos

//devuelve todos lo datos de la coleccion
module.exports.getAllList = (callback) => {
    collectionList.find(callback);
}

