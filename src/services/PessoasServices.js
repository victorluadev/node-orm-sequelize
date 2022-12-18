const Services = require('./Services.js');
const database = require('../models/index.js')

class PessoasServices extends Services {
  constructor() {
    super('Pessoas'),
    this.matriculas = new Services('Matriculas')
  }

  async getActiveRegisters(where = {}) {
    return database[this.modelName].findAll({ where: { ...where } });
  }

  async getAllRegisters(where = {}) {
    return database[this.modelName].scope('all').findAll({ where: { ...where } });
  }

  async cancelPessoaAndMatriculas(estudanteId) {
    return database.sequelize.transaction(async t => {
      await super.updateRegister({ ativo: true }, estudanteId, { transaction: t });
      
      await this.matriculas.updateRegisters({ status: 'cancelado' }, {estudante_id: estudanteId }, { transaction: t });
    })
  }
}

module.exports = PessoasServices;