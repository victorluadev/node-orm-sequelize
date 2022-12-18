const { Router } = require('express');

const MatriculaController = require('../controllers/MatriculaController.js');

const router = Router();

router
  .get('/pessoas/:estudanteID/matricula/:matriculaID', MatriculaController.getMatriculaById)
  .get('/pessoas/matricula/:turmaID/confirmadas', MatriculaController.getMatriculasByTurma)
  .get('/pessoas/matricula/lotadas', MatriculaController.getFullTurmas)
  .post('/pessoas/:estudanteID/matricula/', MatriculaController.createMatricula)
  .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', MatriculaController.restoreMatricula)
  .put('/pessoas/:estudanteID/matricula/:matriculaID', MatriculaController.updateMatricula)
  .delete('/pessoas/:estudanteID/matricula/:matriculaID', MatriculaController.deleteMatricula)

module.exports = router;