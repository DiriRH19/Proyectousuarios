const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const { validateUsuario } = require('../middleware/validate');

router.get('/', usuarioController.getAllUsuarios);
router.get('/:id', usuarioController.getusuarioById);
router.post('/', validateUsuario, usuarioController.createusuario);
router.put('/:id', validateUsuario, usuarioController.updateUsuario);
router.delete('/:id', usuarioController.deleteUsuario);

module.exports = router;
