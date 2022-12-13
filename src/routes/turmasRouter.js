const { Router } = require("express"); 
const TurmaController = require('../controllers/TurmaController.js');

const router = Router();

router
  .get('/turmas', TurmaController.getTurmas)
  .get('/turmas/:id', TurmaController.getTurmaById)
  .post('/turmas', TurmaController.create)
  .put('/turmas/:id', TurmaController.update)
  .delete('/turmas/:id', TurmaController.delete)

module.exports = router;