const express           = require('express')
const router            = express.Router();
const libroController   = require('../controllers/LibroController');

router.get('/listar', libroController.listar);
router.post('/guardar', libroController.guardar);
router.put('/editar', libroController.editar);
router.delete('/eliminar', libroController.eliminar);

module.exports = router;