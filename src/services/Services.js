const database = require('../models/index.js');

class Services {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async getAllRegisters() {
    return database[this.modelName].findAll();
  }
}

module.exports = Services;