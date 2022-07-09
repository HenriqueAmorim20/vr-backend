const express = require('express');
const ctrl = require('./cursos.controller');

const router = express.Router();

router.route('/').get(ctrl.get).post(ctrl.create);
router.route('/:id').get(ctrl.getById).put(ctrl.update).delete(ctrl.delete);
router.route('/:idCurso/cadastrar-aluno/:idAluno').post(ctrl.cadastrarAluno);


module.exports = router;
