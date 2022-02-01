const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');



// Habilitar express.json

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use( express.json({ extended: true }));

app.use(cors());

    app.listen( process.env.PORT || 4000,()=>{
            console.log("Corriendo desde el server -->>>>4000");

        app.use('/alumnos',require('./src/routes/alumnos'))
        app.use('/login',require('./src/routes/login'))

    })
