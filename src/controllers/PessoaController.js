// const database = require('../models/index.js');
// const Sequelize = require('sequelize');

const { PessoasServices } = require('../services/index.js');
const pessoasServices = new PessoasServices();

class PessoaController {
  static async getPessoasAtivas(req, res) {
    try{
      const pessoasAtivas = await pessoasServices.getActiveRegisters();

      return res.status(200).json(pessoasAtivas);
    } catch (err) {
      return res.status(500).json({message: err.message});
    }

  }

  static async getPessoas(req, res) {
    try{
      const pessoas = await pessoasServices.getAllRegisters();

      return res.status(200).json(pessoas);
    } catch (err) {
      return res.status(500).json({message: err.message});
    }

  }

  static async getPessoaById(req, res) {
    const { id } = req.params;

    try{
      const pessoa = await pessoasServices.getRegister(Number(id));

      return res.status(200).json(pessoa);
    } catch(err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async create(req, res) {
    const pessoa = req.body;

    try {
      const createdPessoa = await pessoasServices.createRegister(pessoa);
      
      return res.status(201).json(createdPessoa);
    } catch (err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const updatePessoa = req.body;

    try{
      await pessoasServices.updateRegister(updatePessoa, Number(id));

      const updatedPessoa = await pessoasServices.getRegister(Number(id));

      return res.status(200).json(updatedPessoa);
    } catch(err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async delete(req, res) {
    const { id } = req.params;

    try {
      await pessoasServices.deleteRegister(Number(id));

      return res.status(200).send({message: `ID ${id} successfully deleted`});
    } catch (err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async restorePessoa(req, res) {
    const { id } = req.params;

    try{
      await pessoasServices.restoreRegister(Number(id));

      return res.status(200).json({message: `ID ${id} successfully restored`});
    } catch(err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async cancelPessoa(req, res) {
    const { estudanteID } = req.params;
    try {
        await pessoasServices.cancelPessoaAndMatriculas(Number(estudanteID));
  
        return res.status(200).json({message: `Matriculas ref. estudante ${estudanteID} cancelled`});
    } catch (err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async getMatriculas(req, res) {
    const { estudanteID } = req.params;

    try {
      const pessoa = await pessoasServices.getRegister(Number(estudanteID));

      const matriculas = await pessoa.getAulasMatriculadas();

      return res.status(200).json(matriculas);
    } catch (err) {
      return res.status(500).json({message: err.message});
    }
  }

}

module.exports = PessoaController;