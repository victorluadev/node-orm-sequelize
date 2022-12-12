const bodyParser = require("body-parser");
const pessoasRouter = require('./pessoasRouter.js');

const routes = (app) => {
  
  app.route('/').get((req, res) => {
    res
      .status(200)
      .send({message: "Hello to API"})
  });

  app.use(
    bodyParser.json(),
    pessoasRouter
  );
}

module.exports = routes;