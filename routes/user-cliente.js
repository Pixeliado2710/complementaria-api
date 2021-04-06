const { Router } = require('express');
const {
    usuarioGet,
    usuarioPost,
    usuarioDelete,
    usuarioPut
} = require('../controllers/user.clientes');

const router = Router();

router.get('/', usuarioGet)

router.put('/:id', usuarioPut)

router.delete('/', usuarioDelete)

router.post('/', usuarioPost)

module.exports = router;