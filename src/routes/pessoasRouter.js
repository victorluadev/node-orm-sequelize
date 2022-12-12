const { Router } = require("express"); 
const PessoaController = require('../controllers/PessoaController.js');

const router = Router();

router
  .get('/pessoas', PessoaController.getPessoas)
  .get('/pessoas/:id', PessoaController.getPessoaById)
  .post('/pessoas', PessoaController.create)
  .put('/pessoas/:id', PessoaController.update)
  .delete('/pessoas/:id', PessoaController.delete)

module.exports = router;