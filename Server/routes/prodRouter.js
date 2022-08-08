const express = require('express');
const prodController = require('./../controllers/productsController');
const commandeController = require('./../controllers/commandeController');

const router = express.Router();

// router.param('id', prodController.checkID);

// router
//   .route('/top-5-cheap')
//   .get(prodController.aliasTopprods, prodController.getAllprods);
router.route('/home').get(commandeController.home);

router
  .route('/')
  .get(prodController.getAllProducts)
  .post(prodController.createprod);

router.route('/up/:id').patch(prodController.updateprod);

router
  .route('/:id')
  .patch(prodController.updateprodExist)
  .delete(prodController.deleteprod);

module.exports = router;
