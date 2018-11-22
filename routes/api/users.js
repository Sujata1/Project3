const router = require('express').Router();
const usersController = require('../../controllers/userController');


router.route('/findAll')
  .post(usersController.findAll);

router.route('/find')
  .post(usersController.findOne);

router.route('/findByEmail')
  .post(usersController.findByEmail);

router.route('/createUser')
  .post(usersController.create);

router.route('/updateStatus')
  .post(usersController.updateStatus);

module.exports = router;
