const Services = require('./Services.js');
const database = require('../models/index.js')

class MatriculasServices extends Services {
  constructor() {
    super('Matriculas')
  }

  async restoreMatricula(estudanteId, matriculaId) {
    return database[this.modelName].restore({
      where: {
        id: matriculaId,
        estudante_id: estudanteId
      }
    })
  }

  async getMatriculaByIds(estudanteId, matriculaId) {
    return database[this.modelName].findOne({ 
      where: {
        id: matriculaId,
        estudante_id: estudanteId
      }
    })
  }

  async updateMatricula(data, estudanteId, matriculaId) {
    return database[this.modelName].update(data, {
      where: {
        id: matriculaId,
        estudante_id: estudanteId
      }
    })
  }
}

module.exports = MatriculasServices;