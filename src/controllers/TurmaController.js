const database = require('../models/index.js');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

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
      const turmas = await database.Turmas.findAll({ where });
      return res.status(200).json(turmas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getTurmaById(req, res) {
    const { id } = req.params;

    try{
      const turma = await database.Turmas.findOne({
        where: {
          id: Number(id)
        }
      });

      return res.status(200).json(turma);
    } catch(err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async create(req, res) {
    const turma = req.body;

    try {
      const createdTurma = await database.Turmas.create(turma);
      
      return res.status(201).json(createdTurma);
    } catch (err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const updateTurma = req.body;

    try{
      await database.Turmas.update(updateTurma, {
        where: {
          id: Number(id)
        }
      });

      const updatedTurma = await database.Turmas.findOne({
        where: {
          id: Number(id)
        }
      });

      return res.status(200).json(updatedTurma);
    } catch(err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async delete(req, res) {
    const { id } = req.params;

    try {
      await database.Turmas.destroy({
        where: {
          id: Number(id)
        }
      });

      return res.status(200).send({message: `ID ${id} successfully deleted`});
    } catch (err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async restoreTurma(req, res) {
    const { id } = req.params
    try {
      await database.Turmas.restore( {
        where: { 
          id: Number(id) 
        } 
      });

      return res.status(200).json({ mensagem: `ID ${id} successfully restored`});
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = TurmaController;