const database = require('../models/index.js');

class PessoaController {
  static async getPessoas(req, res) {
    try{
      const pessoas = await database.Pessoas.findAll();

      return res.status(200).json(pessoas);
    } catch (err) {
      return res.status(500).json({message: err.message});
    }

  }

  static async getPessoaById(req, res) {
    const { id } = req.params;

    try{
      const pessoa = await database.Pessoas.findOne({
        where: {
          id: Number(id)
        }
      });

      return res.status(200).json(pessoa);
    } catch(err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async create(req, res) {
    const pessoa = req.body;

    try {
      const createdPessoa = await database.Pessoas.create(pessoa);
      
      return res.status(201).json(createdPessoa);
    } catch (err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const updatePessoa = req.body;

    try{
      await database.Pessoas.update(updatePessoa, {
        where: {
          id: Number(id)
        }
      });

      const updatedPessoa = await database.Pessoas.findOne({
        where: {
          id: Number(id)
        }
      });

      return res.status(200).json(updatedPessoa);
    } catch(err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async delete(req, res) {
    const { id } = req.params;

    try {
      await database.Pessoas.destroy({
        where: {
          id: Number(id)
        }
      });

      return res.status(200).send({message: `ID ${id} successfully deleted`});
    } catch (err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async restorePessoa(req, res) {
    const { id } = req.params;

    try{
      await database.Pessoas.restore({
        where: {
          id: Number(id)
        }
      });

      return res.status(200).json({message: `ID ${id} successfully restored`});
    } catch(err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async restoreMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params
    try {
      await database.Matriculas.restore({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }
      })
      return res.status(200).json({ mensagem: `ID ${id} successfully restored`})
    } catch (error) {
      return res.status(500).json({message: err.message});
    }
  }

  static async getMatriculaById(req, res) {
    const { estudanteID, matriculaID } = req.params;

    try{
      const matricula = await database.Matriculas.findOne({
        where: {
          id: Number(matriculaID),
          estudante_id: Number(estudanteID)
        }
      });

      return res.status(200).json(matricula);
    } catch(err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async createMatricula(req, res) {
    const { estudanteID } = req.params;
    const matricula = { ...req.body, estudante_id: Number(estudanteID) };

    try {
      const createdMatricula = await database.Matriculas.create(matricula);
      
      return res.status(201).json(createdMatricula);
    } catch (err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async updateMatricula(req, res) {
    const { estudanteID, matriculaID } = req.params;
    const updateMatricula = req.body;

    try{
      await database.Matriculas.update(updateMatricula, {
        where: {
          id: Number(matriculaID),
          estudante_id: Number(estudanteID)
        }
      });

      const updatedMatricula = await database.Matriculas.findOne({
        where: {
          id: Number(matriculaID)
        }
      });

      return res.status(200).json(updatedMatricula);
    } catch(err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async deleteMatricula(req, res) {
    const { estudanteID, matriculaID } = req.params;

    try {
      await database.Matriculas.destroy({
        where: {
          id: Number(matriculaID)
        }
      });

      return res.status(200).send({message: `ID ${matriculaID} successfully deleted`});
    } catch (err) {
      return res.status(500).json({message: err.message});
    }
  }
}

module.exports = PessoaController;