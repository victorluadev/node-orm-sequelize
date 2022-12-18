const database = require('../models/index.js');

class Services {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async getAllRegisters(where = {}) {
    return database[this.modelName].findAll({ where: { ...where } });
  }

  async getRegister(id) {
    return database[this.modelName].findOne({ where: { id: id } });
  }

  async createRegister(data) {
    return database[this.modelName].create(data);
  }

  async updateRegister(data, id, transacao = {}) {
    return database[this.modelName].update(data, {
      where: { id: id }
    }, transacao);
  }

  async updateRegisters(data, where, transacao = {}) {
    return database[this.modelName].update(data, {
      where: { ...where }
    }, transacao);
  }

  async deleteRegister(id) {
    return database[this.modelName].destroy({ where: { id: id } });
  }

  async restoreRegister(id) {
    return database[this.modelName].restore({ where: { id: id } });
  }

  async findAndCountAllRegisters(where, aggregations) {
    return database[this.modelName].findAndCountAll({ where: { ...where }, ...aggregations });
  }
}

module.exports = Services;