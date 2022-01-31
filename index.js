const express = require('express');
const app = express();
const bodyParser = require('body-parser');




// Habilitar express.json

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use( express.json({ extended: true }));


    app.listen( process.env.PORT || 4000,()=>{
            console.log("Corriendo desde el server -->>>>4000");

        app.use('/alumnos',require('./src/routes/alumnos'))

    })
