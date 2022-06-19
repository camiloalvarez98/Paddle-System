const pool = require('../database/conexion');
const e = require('express');

let administradorFunctions = {};


//Información administrador
administradorFunctions.getInfoPersonal = async(req,res)=> {
    await pool
        .query('select nombre_administrador,rut_administrador,telefono_administrador,direccion_administrador from administrador where rut_administrador = $1',[req.params.rut_administrador])
        .then((result) => {
            res.status(200).json(result.rows);
        })
        .catch((e)=> console.log(e));

}

//Información clubes
administradorFunctions.getInfoClubes = async(req,res)=> {
    await pool
        .query('select id_club, nombre_club from club')
        .then((result) => {
            res.status(200).json(result.rows);
        })
        .catch((e)=> console.log(e));
}

//Actualizar club
administradorFunctions.updateClub = async(req,res)=> {
    const { direccion,representante,telefono,comuna} = req.body;
    await pool
        .query('update club set direccion=$1,representante=$2,telefono=$3,comuna=$4 where id_club=$5',[direccion,representante,telefono,comuna,req.params.id_club])
        .then((result) => {
            res.json('Club actualizado correctamente');
        })
        .catch((e)=> console.log(e));
}

//Eliminar club
administradorFunctions.deleteClub = async(req, res)=>{ 
    await pool
    .query('DELETE FROM club WHERE id_club = $1',[req.params.id_club])
    .then((result) => {
    res.json(`Club ${req.params.id_club} eliminado correctamente`);
    })
    .catch((e) => console.log(e));
}

//Agregar club
administradorFunctions.createClub = async(req,res)=>{
    const { nombre_club, direccion_club, representante_club, telefono_club, comuna_club  } = req.body; 
    await pool
    .query('INSERT INTO club (nombre_club,direccion_club, representante_club, telefono_club,comuna_club) VALUES ($1,$2,$3,$4,$5)',[nombre_club, direccion_club, representante_club, telefono_club, comuna_club])
    .then((result) => {
        console.log(result);
        res.json({
        message: 'Club creado correctamente',
        body: {
            sala: {nombre_club,direccion_club, representante_club, telefono_club,comuna_club}
        }
        });
    })
        .catch((e) => console.log(e));
}

module.exports = administradorFunctions;