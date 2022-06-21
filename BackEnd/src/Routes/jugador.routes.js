const { Router } = require('express');
const router = Router();
const jugadorFunctions = require('../Controllers/jugador.controller');

//Información jugador
router.get('/getJugador/:correo_jugador',jugadorFunctions.getJugador);

router.get("/",(req,res) => {
    res.json({"hola":"chao"});
})

module.exports = router;