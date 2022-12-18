const { Router } = require("express"); 
const PessoaController = require('../controllers/PessoaController.js');

const router = Router();

router
  .get('/pessoas', PessoaController.getPessoas)
  .get('/pessoas/ativas', PessoaController.getPessoasAtivas)
  .get('/pessoas/:id', PessoaController.getPessoaById)
  .get('/pessoas/:estudanteID/matricula/:matriculaID', PessoaController.getMatriculaById)
  .get('/pessoas/:estudanteID/matricula/', PessoaController.getMatriculas)
  .get('/pessoas/matricula/:turmaID/confirmadas', PessoaController.getMatriculasByTurma)
  .get('/pessoas/matricula/lotadas', PessoaController.getFullTurmas)
  .post('/pessoas', PessoaController.create)
  .post('/pessoas/:estudanteID/cancela', PessoaController.cancelPessoa)
  .put('/pessoas/:id', PessoaController.update)
  .delete('/pessoas/:id', PessoaController.delete)
  .post('/pessoas/:estudanteID/matricula/', PessoaController.createMatricula)
  .post('/pessoas/:id/restaura', PessoaController.restorePessoa)
  .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restoreMatricula)
  .put('/pessoas/:estudanteID/matricula/:matriculaID', PessoaController.updateMatricula)
  .delete('/pessoas/:estudanteID/matricula/:matriculaID', PessoaController.deleteMatricula)

module.exports = router;