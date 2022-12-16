const { Router } = require("express"); 
const PessoaController = require('../controllers/PessoaController.js');

const router = Router();

router
  .get('/pessoas', PessoaController.getPessoasAtivas)
  .get('/pessoas/all', PessoaController.getPessoas)
  .get('/pessoas/:id', PessoaController.getPessoaById)
  .get('/pessoas/:estudanteID/matricula/:matriculaID', PessoaController.getMatriculaById)
  .get('/pessoas/:estudanteID/matricula/', PessoaController.getMatriculas)
  .post('/pessoas', PessoaController.create)
  .put('/pessoas/:id', PessoaController.update)
  .delete('/pessoas/:id', PessoaController.delete)
  .post('/pessoas/:estudanteID/matricula/', PessoaController.createMatricula)
  .post('/pessoas/:id/restaura', PessoaController.restorePessoa)
  .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restoreMatricula)
  .put('/pessoas/:estudanteID/matricula/:matriculaID', PessoaController.updateMatricula)
  .delete('/pessoas/:estudanteID/matricula/:matriculaID', PessoaController.deleteMatricula)

module.exports = router;