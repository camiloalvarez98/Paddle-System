const pool = require('../database/conexion');
const e = require('express');

let jugadorFunctions = {};

//Información jugador
jugadorFunctions.getJugador = async(req,res)=> {
    await pool
        .query('SELECT nombre_jugador,apellido_paterno,telefono_jugador,direccion_jugador,puntaje_jugador,correo_jugador FROM jugador where correo_jugador=$1',[req.params.correo_jugador])
        .then((result) => {
            res.status(200).json(result.rows);
        })
        .catch((e)=> console.log(e));
}

//Información campeonatos
jugadorFunctions.getCampeonatos = async(req,res) =>{
    await pool
        .query('select ')
}

module.exports = jugadorFunctions;