const Alunos = require('../alunos/alunos.model');
const Cursos = require('./cursos.model');

const apiCursos = {
  async get(req, res, next) {
    try {
      const cursos = await Cursos.findAll();
      res.status(200).json(cursos);
    } catch (error) {
      console.log(`Erro ao recuperar todos os cursos - ${error}`);
      next(error);
    }
  },

  async getById(req, res, next) {
    const id = req.params.id;
    try {
      const curso = await Cursos.findByPk(id);
      res.status(200).json(curso);
    } catch (error) {
      console.log(`Erro ao recuperar curso com id: ${id} - ${error}`);
      next(error);
    }
  },

  async create(req, res, next) {
    const { descricao, ementa } = req.body;
    try {
      const curso = await Cursos.create({ descricao, ementa });
      res.status(201).json(curso);
    } catch (error) {
      console.log(`Erro ao criar o curso - ${error}`);
      next(error);
    }
  },

  async update(req, res, next) {
    const id = req.params.id;
    const { descricao, ementa } = req.body;
    try {
      const updatedCount = await Cursos.update({ descricao, ementa }, { where: { id } });
      res.status(200).json(updatedCount);
    } catch (error) {
      console.log(`Erro ao atualizar o curso com id: ${id} - ${error}`);
      next(error);
    }
  },

  async delete(req, res, next) {
    const id = req.params.id;
    try {
      const deleteCount = await Cursos.destroy({ where: { id }});
      res.status(200).json(deleteCount);
    }
    catch (error) {
      console.log(`Erro ao deletar curso com id: ${id} - ${error}`);
      next(error);
    }
  },

  async getAlunosCurso(req, res, next) {
    const { idCurso } = req.params;
    try {
      const curso = await Cursos.findByPk(idCurso,{
        include: [{
          model: Alunos,
          required: false,
          as: "alunos"
        }]
      });
      res.status(200).json(curso);
    } catch (error) {
      console.log(`Erro ao recuperar curso com id: ${idCurso} - ${error}`);
      next(error);
    }
  },
}
module.exports = apiCursos;