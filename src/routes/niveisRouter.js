const { Router } = require("express"); 
const NivelController = require('../controllers/NivelController.js');

const router = Router();

router
  .get('/niveis', NivelController.getNiveis)
  .get('/niveis/:id', NivelController.getNivelById)
  .post('/niveis', NivelController.create)
  .put('/niveis/:id', NivelController.update)
  .delete('/niveis/:id', NivelController.delete)

module.exports = router;