const { Router } = require('express');
const router = Router();
const clubFunctions = require('../Controllers/club.controller');

//Información club
router.get('/getClub/:correo_club',clubFunctions.getClub);
router.get('/getCampeonatos/:correo_club',clubFunctions.getCampeonatos);

router.put('/updateClub/:correo_club', clubFunctions.updateClub);

router.post('/createCampeonato/:correo_club', clubFunctions.createCampeonato)



router.get("/",(req,res) => {
    res.json({"hola":"chao"});
})

module.exports = router;