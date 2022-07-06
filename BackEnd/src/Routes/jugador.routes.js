const { Router } = require('express');
const router = Router();
const jugadorFunctions = require('../Controllers/jugador.controller');

//Información jugador
router.get('/getJugador/:correo_jugador',jugadorFunctions.getJugador);

//Campeonatos registrados
router.get('/getCampeonatos/:correo_jugador',jugadorFunctions.getCampeonatos);

//Eliminar inscripción
router.delete('/deleteInscripcion/:id_dupla',jugadorFunctions.deleteInscripcion);

//Campeonatos por categoria
router.get('/getCampeonatosCategoria/:categoria_jugador/:correo_jugador',jugadorFunctions.getCampeonatosCategoria);

//Actualizar jugador
router.put('/updateInformacion/:correo_jugador',jugadorFunctions.updateInformacion);

//Inscribirse a campeonato
router.post('/inscribirCampeonato',jugadorFunctions.inscribirCampeonato);
router.post('/createJugador',jugadorFunctions.createJugador);

router.get("/",(req,res) => {
    res.json({"hola":"chao"});
})

module.exports = router;