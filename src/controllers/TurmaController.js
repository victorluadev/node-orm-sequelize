// const database = require('../models/index.js');
const { Op } = require('sequelize');

const { TurmasServices } = require('../services/index.js');
const turmasServices = new TurmasServices();

class TurmaController {

  static async getTurmas(req, res) {
    const {data_inicial, data_final } = req.query;
    const where = {};

    data_inicial || data_final ? where.data_inicio = {} : null;

    data_inicial ? where.data_inicio = [Op.gte] = data_inicial : null;

    data_final ? where.data_inicio = [Op.lte] = data_final : null;

    console.log(data_inicial)
    console.log(data_final)
    try {
      const turmas = await turmasServices.getAllAndFilter(where);

      return res.status(200).json(turmas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getTurmaById(req, res) {
    const { id } = req.params;

    try{
      const turma = await turmasServices.getRegister(Number(id));

      return res.status(200).json(turma);
    } catch(err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async create(req, res) {
    const turma = req.body;

    try {
      const createdTurma = await turmasServices.createRegister(turma);
      
      return res.status(201).json(createdTurma);
    } catch (err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const updateTurma = req.body;

    try{
      await turmasServices.updateRegister(updateTurma, Number(id));

      const updatedTurma = await turmasServices.getRegister(Number(id));

      return res.status(200).json(updatedTurma);
    } catch(err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async delete(req, res) {
    const { id } = req.params;

    try {
      await turmasServices.deleteRegister(Number(id));

      return res.status(200).send({message: `ID ${id} successfully deleted`});
    } catch (err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async restoreTurma(req, res) {
    const { id } = req.params
    try {
      await turmasServices.restoreRegister(Number(id));

      return res.status(200).json({ mensagem: `ID ${id} successfully restored`});
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = TurmaController;