// const database = require('../models/index.js');

const { NiveisServices } = require('../services/index.js');
const niveisServices = new NiveisServices();

class NivelController {

  static async getNiveis(req, res) {
    try {
      const niveis = niveisServices.getAllRegisters()
      return res.status(200).json(niveis)
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getNivelById(req, res) {
    const { id } = req.params;

    try{
      const nivel = await database.Niveis.findOne({
        where: {
          id: Number(id)
        }
      });

      return res.status(200).json(nivel);
    } catch(err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async create(req, res) {
    const nivel = req.body;

    try {
      const createdNivel = await database.Niveis.create(nivel);
      
      return res.status(201).json(createdNivel);
    } catch (err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const updateNivel = req.body;

    try{
      await database.Niveis.update(updateNivel, {
        where: {
          id: Number(id)
        }
      });

      const updatedNivel = await database.Niveis.findOne({
        where: {
          id: Number(id)
        }
      });

      return res.status(200).json(updatedNivel);
    } catch(err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async delete(req, res) {
    const { id } = req.params;

    try {
      await database.Niveis.destroy({
        where: {
          id: Number(id)
        }
      });

      return res.status(200).send({message: `ID ${id} successfully deleted`});
    } catch (err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async restoreNivel(req, res) {
    const { id } = req.params
    try {
      await database.Niveis.restore( {where: { id: Number(id) } } )
      return res.status(200).json({ mensagem: `ID ${id} successfully restored`})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = NivelController;