const pool = require('../database/conexion');
const e = require('express');
const { json } = require('express');

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

//inscritos en campeonato
clubFunctions.getInscritos = async(req,res)=>{
    await pool
        .query('SELECT id_dupla, rut_jugador1, rut_jugador2, id_categoria FROM dupla where id_campeonato = $1', [req.params.id_campeonato])
        .then((result) =>{
            res.status(200).json(result.rows)
        })
        .catch((e) => console.log(e))
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
    const {fecha_i, fecha_t, nCamp} = req.body;
    
    console.log(fecha_i, fecha_t, nCamp)
    await pool
        .query ('INSERT INTO campeonato (fecha_inicio, fecha_termino, id_club, nombre_campeonato) VALUES ($1,$2,(SELECT id_club FROM club WHERE correo_club = $3), $4)',
        [fecha_i, fecha_t, req.params.correo_club, nCamp])
        .then((result) =>{
            res.json("Campeonato creado con exito")
        })
        .catch((e) => console.log(e))
  
}
clubFunctions.campeonatoCategoria = async (req,res) => {
    const { categorias } = req.body;
    
    /*categorias.forEach(categoria => {
        await pool
        .query('INSERT INTO campeonato__categoria (id_campeonato, id_categoria) VALUES ($1, $2)',[categoria, req.params.id_campeonato])
        .then((result) => {
            res.json("categoria creada con exito!")
        })
    });*/

    
}
//mostrar campeonatos
clubFunctions.getCampeonatos = async (req,res) => {
    await pool
        .query('SELECT nombre_campeonato, id_campeonato, fecha_inicio, fecha_termino FROM campeonato WHERE id_club = (SELECT id_club FROM club WHERE correo_club = $1)', [req.params.correo_club])
        .then((result) =>{
            res.status(200).json(result.rows);
        })
        .catch((e)=>console.log(e))
}

//eliminar campeonato
clubFunctions.deleteCampeonato = async (req, res) =>{

    await pool
        .query('DELETE FROM campeonato WHERE id_campeonato = $1', [req.params.id_campeonato])
        .then((result) => {
            res.json(`Campeonato ${req.params.id_campeonato} eliminado correctamente`)
        })
        .catch((e) => console.log(e)); 
}

//registrar ganadores
clubFunctions.regGanadores = async function(req,res) {
    const { id_categoria, id_dupla } = req.body;

    console.log(id_categoria)
    console.log(id_dupla)

    updatedb = async function(){
        await pool
            .query('UPDATE campeonato_categoria set id_dupla_ganadora = $1 WHERE id_categoria = $2 and id_campeonato = $3',[id_dupla, id_categoria, req.params.id_campeonato])
            .then(() =>{
                res.json("tabla campeonao_categoria actualizada")
                //res.status(500).json({error: 'Ha Ocurrido un error'});
               
            })
            .catch((e) => console.log(e)); 
    }
    updatedb();

    updateJugador1 = async function(){
        await pool 
            .query('UPDATE jugador SET puntaje_jugador = puntaje_jugador + 50 WHERE rut_jugador = (SELECT rut_jugador1 FROM dupla WHERE id_dupla = $1 ) ', [id_dupla])
            .then(() =>{
                res.json("Tabla jugador1 actualizada")
                //res.status(500).json({error: 'Ha Ocurrido un error'});
            })
            .catch((e) => console.log(e)); 
    }
    updateJugador1();

    updateJugador2 = async function(){
        await pool 
            .query('UPDATE jugador SET puntaje_jugador = puntaje_jugador + 50 WHERE rut_jugador = (SELECT rut_jugador2 FROM dupla WHERE id_dupla = $1 )', [id_dupla])
            .then(() =>{
                res.json("Tabla jugador2 actualizada")
                //res.status(500).json({error: 'Ha Ocurrido un error'});
            })
            .catch((e) => console.log(e)); 
    }
    updateJugador2();


}

    

module.exports = clubFunctions;