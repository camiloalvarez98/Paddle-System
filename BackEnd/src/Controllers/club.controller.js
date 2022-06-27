const pool = require('../database/conexion');
const e = require('express');
const { json } = require('express');

let clubFunctions = {};

function random (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Información club
clubFunctions.getClub = async(req,res)=> {
    await pool
        .query('select nombre_club, direccion_club, representante_club,telefono_club,comuna_club from club where correo_club=$1',[req.params.correo_club])
        .then((result) => {
            res.status(200).json(result.rows);
        })
        .catch((e)=> console.log(e));
}

//editar infoClub
clubFunctions.updateClub = async(req, res) =>{
    const { direccion, representante, telefono, comuna } = req.body; //datos posibles a editar
    await pool
        
        .query('UPDATE club SET direccion_club = $1, representante_club = $2, telefono_club = $3, comuna_club = $4 WHERE correo_club = $5',
            [direccion, representante, telefono, comuna, req.params.correo_club])
        .then((result)=>{
            res.json('Club actualizado correctamente')
        })
        .catch((e) => console.log(e))
}

//crear campeonato
clubFunctions.createCampeonato = async (req,res) => {
    const {fecha_i, fecha_t} = req.body;
    const num = random(0, 1000)
    //const id_camp = 'C-' + num
    
    await pool
        .query ('INSERT INTO campeonato (id_campeonato, fecha_inicio, fecha_termino, id_club) VALUES ($1,$2,$3,(SELECT id_club FROM club WHERE correo_club = $4))',
        [num, fecha_i, fecha_t, req.params.correo_club])
        .then((result) =>{
            res.json("Campeonato creado con exito")
        })
        .catch((e) => console.log(e))
}

//mostrar campeonatos
clubFunctions.getCampeonatos = async (req,res) => {
    await pool
        .query('SELECT id_campeonato, fecha_inicio, fecha_termino FROM campeonato WHERE id_club = (SELECT id_club FROM club WHERE correo_club = $1)', [req.params.correo_club])
        .then((result) =>{
            res.status(200).json(result.rows);
        })
        .catch((e)=>console.log(e))
}

//registrar ganadores
clubFunctions.regGanadores = async (req,res) =>{
    
}
module.exports = clubFunctions;