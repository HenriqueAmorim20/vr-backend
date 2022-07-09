const Alunos = require('./alunos.model');
const Cursos = require('../cursos/cursos.model');

const apiAlunos = {
  async get(req, res, next) {
    try {
      const alunos = await Alunos.findAll();
      res.status(200).json(alunos);
    } catch (error) {
      console.log(`Erro ao recuperar todos os alunos - ${error}`);
      next(error);
    }
  },

  async getById(req, res, next) {
    const id = req.params.id;
    try {
      const aluno = await Alunos.findByPk(id);
      res.status(200).json(aluno);
    } catch (error) {
      console.log(`Erro ao recuperar aluno com id: ${id} - ${error}`);
      next(error);
    }
  },

  async create(req, res, next) {
    const { nome } = req.body;
    try {
      const aluno = await Alunos.create({ nome });
      res.status(201).json(aluno);
    } catch (error) {
      console.log(`Erro ao criar o aluno - ${error}`);
      next(error);
    }
  },

  async update(req, res, next) {
    const id = req.params.id;
    const { nome } = req.body;
    try {
      const updatedCount = await Alunos.update({ nome }, { where: { id } });
      res.status(200).json(updatedCount);
    } catch (error) {
      console.log(`Erro ao atualizar o aluno com id: ${id} - ${error}`);
      next(error);
    }
  },

  async delete(req, res, next) {
    const id = req.params.id;
    try {
      const deleteCount = await Alunos.destroy({ where: { id }});
      res.status(200).json(deleteCount);
    }
    catch (error) {
      console.log(`Erro ao deletar aluno com id: ${id} - ${error}`);
      next(error);
    }
  },

  async cadastrarCurso(req, res, next) {
    const { idAluno, idCurso } = req.params;

    try {
      const curso = await Cursos.findByPk(idCurso);

      if (!curso) throw new Error('Esse curso não existe!');

      const result = await curso.addAlunos(idAluno);

      return res.status(200).json(result);
    } catch (error) {
      console.log(`Erro ao cadastrar curso - ${error}`);
      next(error);
    }

  }
}
module.exports = apiAlunos;