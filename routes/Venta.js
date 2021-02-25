const express           = require('express')
const router            = express.Router();
const ventaController   = require('../controllers/VentaController');

router.get('/listar', ventaController.listar);
router.post('/guardar', ventaController.guardar); 
router.delete('/eliminar', ventaController.eliminar); 
router.put('/editar', ventaController.editar); 
router.get('/', ventaController.findById);

module.exports = router;