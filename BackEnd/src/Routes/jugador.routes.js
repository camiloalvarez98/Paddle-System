const { Router } = require('express');
const router = Router();
const jugadorFunctions = require('../Controllers/jugador.controller');

//Información jugador
router.get('/getInfo/:rut_jugador',jugadorFunctions.getInfo);

router.get("/",(req,res) => {
    res.json({"hola":"chao"});
})

module.exports = router;