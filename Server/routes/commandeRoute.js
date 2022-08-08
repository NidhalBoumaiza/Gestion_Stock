const express = require('express');
const commandeController = require('./../controllers/commandeController');

const router = express.Router();

router.route('/').get(commandeController.getAllCommande);

router
  .route('/:id')
  .patch(commandeController.updateCommande)
  .delete(commandeController.deleteCommande)
  .post(commandeController.createCommande);

module.exports = router;
