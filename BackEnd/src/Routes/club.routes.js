const { Router } = require('express');
const router = Router();
const clubFunctions = require('../Controllers/club.controller');

//Información club
router.get('/getClub/:correo_club',clubFunctions.getClub);

router.get("/",(req,res) => {
    res.json({"hola":"chao"});
})

module.exports = router;