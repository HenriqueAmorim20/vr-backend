const express = require('express');
const ctrl = require('./alunos.controller');

const router = express.Router();

router.route('/').get(ctrl.get).post(ctrl.create);
router.route('/:id').get(ctrl.getById).put(ctrl.update).delete(ctrl.delete);
router.route('/:idAluno/cadastrar-curso/:idCurso').post(ctrl.cadastrarCurso);
router.route('/:idAluno/deletar-curso/:idCurso').delete(ctrl.deletarCurso);
router.route('/:idAluno/cursos').get(ctrl.getCursosAluno);

module.exports = router;
