const bodyParser = require("body-parser");
const pessoasRouter = require('./pessoasRouter.js');
const niveisRouter = require('./niveisRouter.js');
const turmasRouter = require('./turmasRouter.js');
const matriculasRouter = require('./matriculasRouter.js');

const routes = (app) => {
  
  app.route('/').get((req, res) => {
    res
      .status(200)
      .send({message: "Hello to API"})
  });

  app.use(
    bodyParser.json(),
    pessoasRouter,
    niveisRouter,
    turmasRouter,
    matriculasRouter
  );
}

module.exports = routes;