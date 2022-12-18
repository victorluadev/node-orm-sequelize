const database = require('../models/index.js');

class Services {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async getAllRegisters() {
    return database[this.modelName].findAll();
  }

  async getRegister(id) {

  }

  async createRegister(data) {

  }

  async updateRegister(data, id) {

  }

  async deleteRegister(id) {

  }
}

module.exports = Services;