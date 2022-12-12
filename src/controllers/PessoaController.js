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
}

module.exports = PessoaController;