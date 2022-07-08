const pool = require('../database/conexion');
const e = require('express');

let administradorFunctions = {};


//Información administrador
administradorFunctions.getAdministrador = async(req,res)=> {
    await pool
        .query('select nombre_administrador,rut_administrador,apellido_paterno_administrador,telefono_administrador,direccion_administrador, correo_admin from administrador where correo_admin = $1',[req.params.correo_admin])
        .then((result) => {
            res.status(200).json(result.rows);
        })
        .catch((e)=> console.log(e));

}

//Información clubes
administradorFunctions.getInfoClubes = async(req,res)=> {
    await pool
        .query('select id_club, nombre_club,representante_club,telefono_club,comuna_club,direccion_club from club')
        .then((result) => {
            res.status(200).json(result.rows);
        })
        .catch((e)=> console.log(e));
}

//Actualizar club
administradorFunctions.updateClub = async(req,res)=> {
    const { direccion_club,representante_club,telefono_club,comuna_club} = req.body;
    await pool
        .query('update club set direccion_club=$1,representante_club=$2,telefono_club=$3,comuna_club=$4 where id_club=$5',[direccion_club,representante_club,telefono_club,comuna_club,req.params.id_club])
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
    const { nombre_club, direccion_club, representante_club, telefono_club, comuna_club, correo_club  } = req.body; 
    await pool
    .query('INSERT INTO club (nombre_club,direccion_club, representante_club, telefono_club,comuna_club, correo_club) VALUES ($1,$2,$3,$4,$5,$6)',[nombre_club, direccion_club, representante_club, telefono_club, comuna_club, correo_club])
    .then((result) => {
        console.log(result);
        res.json({
        message: 'Club creado correctamente',
        body: {
            club: {nombre_club, direccion_club, representante_club, telefono_club, comuna_club }
        }
        });
    })
    .catch((e) => console.log(e));
}

//Editar perfil
administradorFunctions.updateInformacion = async(req,res)=> {
    const { nombre_administrador,apellido_paterno_administrador,telefono_administrador,direccion_administrador} = req.body;
    await pool
        .query('update administrador set direccion_administrador=$1,nombre_administrador=$2,telefono_administrador=$3,apellido_paterno_administrador=$4 where correo_admin=$5',[direccion_administrador,nombre_administrador,telefono_administrador,apellido_paterno_administrador,req.params.correo_admin])
        .then((result) => {
            res.json({
                message: 'Administrador actualizado correctamente',
                body: {
                    administrador: {nombre_administrador,apellido_paterno_administrador,telefono_administrador,direccion_administrador }
                }
            });
            
        })
        .catch((e)=> console.log(e));
}

module.exports = administradorFunctions;