const { Router } = require("express"); 
const PessoaController = require('../controllers/PessoaController.js');

const router = Router();

router
  .get('/pessoas', PessoaController.getPessoas)
  .get('/pessoas/ativas', PessoaController.getPessoasAtivas)
  .get('/pessoas/:id', PessoaController.getPessoaById)
  .get('/pessoas/:estudanteID/matricula/', PessoaController.getMatriculas)
  .post('/pessoas', PessoaController.create)
  .post('/pessoas/:estudanteID/cancela', PessoaController.cancelPessoa)
  .put('/pessoas/:id', PessoaController.update)
  .delete('/pessoas/:id', PessoaController.delete)
  .post('/pessoas/:id/restaura', PessoaController.restorePessoa)

module.exports = router;