//import { express } from 'express'
//import { morgan } from 'morgan'
//import jugadorroutes from './Routes/jugador.routes.js';
const cors = require("cors")
const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(cors())

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

//routes

app.use('/api/Jugador',require('./src/Routes/jugador.routes'));
app.use('/api/Administrador',require('./src/Routes/administrador.routes'));
app.use('/api/Club',require('./src/Routes/club.routes'));

const PORT = process.env.PORT || 3001;

//inicializador del server
app.listen(PORT, () => {
    console.log(`Server listening on port 3001`);
});
