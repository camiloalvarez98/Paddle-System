const pool = require('../database/conexion');
const e = require('express');

let jugadorFunctions = {};

//Información jugador
jugadorFunctions.getJugador = async(req,res)=> {
    await pool
        .query('SELECT rut_jugador, nombre_jugador,apellido_paterno,telefono_jugador,direccion_jugador,puntaje_jugador,categoria_jugador,correo_jugador FROM jugador where correo_jugador=$1',[req.params.correo_jugador])
        .then((result) => {
            res.status(200).json(result.rows);
        })
        .catch((e)=> console.log(e));
}

//Información campeonatos
jugadorFunctions.getCampeonatos = async(req,res) =>{
    await pool
        .query('select c.nombre_campeonato,d.id_dupla, c.fecha_inicio,c.fecha_termino,club.nombre_club from jugador as j inner join dupla as d on j.rut_jugador = d.rut_jugador1 or j.rut_jugador = d.rut_jugador2 inner join campeonato_categoria as cc on d.id_campeonato = cc.id_campeonato and d.id_categoria = cc.id_categoria inner join campeonato as c on cc.id_campeonato = c.id_campeonato inner join club  on c.id_club = club.id_club where correo_jugador = $1',[req.params.correo_jugador])
        .then((result) => {
            res.status(200).json(result.rows);
        })
        .catch((e)=> console.log(e));
    }


//Eliminar inscripcion
jugadorFunctions.deleteInscripcion = async(req, res)=>{ 
    await pool
    .query('delete from dupla where id_dupla=$1',[req.params.id_dupla])
    .then((result) => {
    res.json(`Inscripción ${req.params.id_dupla} eliminada correctamente`);
    })
    .catch((e) => console.log(e));
}

//Campeonatos de su categoria
jugadorFunctions.getCampeonatosCategoria = async(req,res)=> {
    await pool
        .query('select camp.nombre_campeonato,club.nombre_club,camp.fecha_inicio,camp.fecha_termino,c.nombre_categoria,cc.id_campeonato,cc.id_categoria  from categoria as c  inner join campeonato_categoria as cc on c.id_categoria = cc.id_categoria  inner join campeonato as camp  on cc.id_campeonato = camp.id_campeonato  inner join club   on camp.id_club = club.id_club  where c.nombre_categoria = $1 and cc.id_campeonato not in  (select cc.id_campeonato from jugador as j  inner join dupla as d  on j.rut_jugador = d.rut_jugador1 or j.rut_jugador = d.rut_jugador2  inner join campeonato_categoria as cc  on d.id_campeonato = cc.id_campeonato and d.id_categoria = cc.id_categoria  inner join campeonato as c  on cc.id_campeonato = c.id_campeonato  inner join club   on c.id_club = club.id_club  where correo_jugador = $2)',[req.params.categoria_jugador,req.params.correo_jugador])
        .then((result) => {
            res.status(200).json(result.rows);
        })
        .catch((e)=> console.log(e));
}

//Editar jugador
jugadorFunctions.updateInformacion = async(req,res)=> {
    const { nombre_jugador,apellido_paterno,telefono_jugador,direccion_jugador} = req.body;
    await pool
        .query('update jugador set direccion_jugador=$1,nombre_jugador=$2,telefono_jugador=$3,apellido_paterno=$4 where correo_jugador=$5',[direccion_jugador,nombre_jugador,telefono_jugador,apellido_paterno,req.params.correo_jugador])
        .then((result) => {
            res.json('Jugador actualizado correctamente');
        })
        .catch((e)=> console.log(e));
}

//Inscribirse en campeonato
jugadorFunctions.inscribirCampeonato = async(req,res)=>{
    const {rut_jugador2, id_campeonato, id_categoria } = req.body; 
    await pool
    .query('INSERT INTO dupla (rut_jugador1,rut_jugador2, id_campeonato, id_categoria) VALUES ($1,$2,$3,$4)',[req.params.rut_jugador1,rut_jugador2,id_campeonato,id_categoria])
    .then((result) => {
        console.log(result);
        res.json({
        message: 'Inscripcion creada correctamente',
        body: {
            inscripcion: { rut_jugador2, id_campeonato, id_categoria }
        }
        });
    })
        .catch((e) => console.log(e));
}

jugadorFunctions.createJugador = async(req,res) =>{
    const {nombre, apellido, rut, email, password, direccion, telefono} = req.body
    
    const categoria = req.params.id_categoria
    const puntaje_jugador = req.params.puntaje
    console.log(nombre, apellido, rut, categoria, email, password, puntaje_jugador)
    await pool
        .query('INSERT INTO jugador (rut_jugador, nombre_jugador, apellido_paterno, contraseña_jugador, telefono_jugador, direccion_jugador, puntaje_jugador, correo_jugador, categoria_jugador) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)',
        [rut, nombre, apellido, password, telefono, direccion, puntaje_jugador, email, categoria])
        .then(()=>{
            res.json("Jugador anadido con exito!")
        })
        .catch((e) => console.log(e))
}
module.exports = jugadorFunctions;