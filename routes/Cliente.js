const express           = require('express')
const router            = express.Router();
const clienteController = require('../controllers/ClienteController');

router.get('/listar', clienteController.listar);
router.post('/guardar', clienteController.guardar);
router.put('/editar', clienteController.editar);
router.delete('/eliminar', clienteController.eliminar);

module.exports = router;
