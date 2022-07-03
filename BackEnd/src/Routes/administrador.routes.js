const { Router } = require('express');
const router = Router();
const administradorFunctions = require('../Controllers/administrador.controller');

//Información administrador
router.get('/getAdministrador/:correo_admin',administradorFunctions.getAdministrador);

//Información clubes
router.get('/getClubes',administradorFunctions.getInfoClubes);

//Actualizar club
router.put('/updateClub/:id_club',administradorFunctions.updateClub)

//Eliminar club
router.delete('/deleteClub/:id_club',administradorFunctions.deleteClub)

//Agregar club
router.post('/createClub',administradorFunctions.createClub)

//Actualizar perfil
router.put('/updateInformacion/:correo_admin',administradorFunctions.updateInformacion)

router.get("/",(req,res) => {
    res.json({"hola":"chao"});
})

module.exports = router;