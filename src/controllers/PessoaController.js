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
}

module.exports = PessoaController;