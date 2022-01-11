const router = require('express').Router();

const cadastroController = require('../controllers/cadastro-controller');

router.post('/', cadastroController.cadastrarUsuario);

router.get('/', cadastroController.listarCadastros);

router.get('/:id', cadastroController.listarCadastrosPorID);

router.put('/:id', cadastroController.atualizarCadastro);

router.delete('/:id', cadastroController.removerCadastro);

module.exports = router;