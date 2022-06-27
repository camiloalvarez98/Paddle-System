const pool = require('../database/conexion');
const e = require('express');

let clubFunctions = {};

//Información club
clubFunctions.getClub = async(req,res)=> {
    await pool
        .query('select nombre_club, direccion_club, representante_club,telefono_club,comuna_club from club where correo_club=$1',[req.params.correo_club])
        .then((result) => {
            res.status(200).json(result.rows);
        })
        .catch((e)=> console.log(e));

}

module.exports = clubFunctions;