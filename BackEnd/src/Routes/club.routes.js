const { Router } = require('express');
const router = Router();
const clubFunctions = require('../Controllers/club.controller');

//Información club
router.get('/getClub/:correo_club',clubFunctions.getClub);
router.get('/getCampeonatos/:correo_club',clubFunctions.getCampeonatos);
router.get('/getInscritos/:id_campeonato/:id_categoria', clubFunctions.getInscritos);

router.put('/updateClub/:correo_club', clubFunctions.updateClub);
router.put('/selectGanadores/:id_campeonato/:id_categoria',clubFunctions.regGanadores);



router.post('/createCampeonato/:correo_club', clubFunctions.createCampeonato)
router.post('/createCategoria/:id_campeonato',clubFunctions.campeonatoCategoria)

router.delete('/eliminarCampeonato/:id_campeonato',clubFunctions.deleteCampeonato)

router.get("/",(req,res) => {
    res.json({"hola":"chao"});
})

module.exports = router;