//import { express } from 'express'
//import { morgan } from 'morgan'
//import jugadorroutes from './Routes/jugador.routes.js';

const express = require("express");
const morgan = require("morgan");
const app = express();


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes

app.use('/api/Jugador',require('./src/Routes/jugador.routes'));
app.use('/api/Administrador',require('./src/Routes/administrador.routes'));
app.use('/api/Club',require('./src/Routes/club.routes'));


//inicializador del server
app.listen(3001, () => {
    console.log(`Server started on port ${3001}`);
});
