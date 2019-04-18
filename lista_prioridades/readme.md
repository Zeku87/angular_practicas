# Lista de prioridades App
Aplicación muy sencilla para que veais la estructura de que tiene una app basada en el MEAN Stack siguiendo el patrón MVC para estructurarla.

## Para ejecutar el proyecto
Haced npm install y luego npm start.
Es recomendable instalar nodemon mediante npm -g nodemon. Nodemon monitoriza los cambios que hagamos en los ficheros y actualiza el servidor para ver esos cambios en el navegador.

## Notas sobre Express
El uso del módulo "cors" se justifica para la solicitud de recursos que se encuentran en dominios diferentes al nuestro.

En la carpeta controllers albergamos el fichero controller.js donde se encuentran las rutas de la aplicación. Cada ruta a su vez es una solicitud HTTP. Mediante el programa Postman podemos testear las solicitudes http.

## Notas sobre la configuración de Mongoose
Colocamos la URI con el puerto por defecto en el fichero config/database.js
Y establecemos conexión con la base de datos en el fichero app.js
Hay que tener en cuenta que la base de datos se creará automáticamente cuando insertemos en una colección un primer documento.

El modelo de datos se encuentra en el fichero models/model.js
Para saber más sobre la elaboración del esquema de la base de datos podéis consultar https://code.tutsplus.com/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527