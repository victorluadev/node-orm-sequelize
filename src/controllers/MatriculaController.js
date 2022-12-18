const { MatriculasServices } = require('../services/index.js');
const matriculasServices = new MatriculasServices();

const Sequelize = require('sequelize')

class MatriculaController {

  static async restoreMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params
    try {
      await matriculasServices.restoreMatricula(Number(estudanteId), Number(matriculaId));
      
      return res.status(200).json({ mensagem: `ID ${id} successfully restored`})
    } catch (error) {
      return res.status(500).json({message: err.message});
    }
  }

  static async getMatriculaById(req, res) {
    const { estudanteID, matriculaID } = req.params;

    try{
      const matricula = await matriculasServices.getMatriculaByIds(Number(estudanteID), Number(matriculaID));

      return res.status(200).json(matricula);
    } catch(err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async createMatricula(req, res) {
    const { estudanteID } = req.params;
    const matricula = { ...req.body, estudante_id: Number(estudanteID) };

    try {
      const createdMatricula = await matriculasServices.createRegister(matricula);
      
      return res.status(201).json(createdMatricula);
    } catch (err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async updateMatricula(req, res) {
    const { estudanteID, matriculaID } = req.params;
    const updateMatricula = req.body;

    try{
      await matriculasServices.updateMatricula(updateMatricula, Number(matriculaID), Number(estudanteID));

      const updatedMatricula = await matriculasServices.getRegister(Number(matriculaID));

      return res.status(200).json(updatedMatricula);
    } catch(err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async deleteMatricula(req, res) {
    const { matriculaID } = req.params;

    try {
      await matriculasServices.deleteRegister(matriculaID);

      return res.status(200).send({message: `ID ${matriculaID} successfully deleted`});
    } catch (err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async getMatriculasByTurma(req, res) {
    const { turmaID } = req.params;

    try {
      const matriculas = await matriculasServices.findAndCountAllRegisters(
        {
          turma_id: Number(turmaID),
          status: "confirmado"
        },
        {
          limit: 20,
          order: [['estudante_id', 'ASC']]
        }
      );

      return res.status(200).json(matriculas);
    } catch (err) {
      return res.status(500).json({message: err.message});
    }
  }

  static async getFullTurmas(req, res) {
    const lotacaoTurma = 2;
    try {
      const fullTurmas = await matriculasServices.findAndCountAllRegisters(
        {
          status: "confirmado"   
        },
        {
          attributes: ['turma_id'],
          group: ['turma_id'],
          having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`)
        }
      );

      return res.status(200).json(fullTurmas.count);
    } catch (err) {
      return res.status(500).json({message: err.message});
    }
  }
}

module.exports = MatriculaController;