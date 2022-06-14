const { Router } = require('express');
const router = Router();
const clubFunctions = require('../Controllers/club.controller');

//Información club
router.get('/getInfo/:id_club',clubFunctions.getInfo);

router.get("/",(req,res) => {
    res.json({"hola":"chao"});
})

module.exports = router;