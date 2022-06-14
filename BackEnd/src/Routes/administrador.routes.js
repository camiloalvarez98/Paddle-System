const { Router } = require('express');
const router = Router();
const administradorFunctions = require('../Controllers/administrador.controller');

//Información administrador
router.get('/getInfo/:rut_administrador',administradorFunctions.getInfoPersonal);

//Información clubes
router.get('/getClubes',administradorFunctions.getInfoClubes);

//Actualizar club
router.put('/updateClub/:id_club',administradorFunctions.updateClub)

//Eliminar club
router.delete('/deleteClub/:id_club',administradorFunctions.deleteClub)

router.get("/",(req,res) => {
    res.json({"hola":"chao"});
})

module.exports = router;