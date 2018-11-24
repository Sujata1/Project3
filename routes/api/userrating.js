const router = require('express').Router();
const userRatingController = require('../../controllers/userRatingController');


router.route('/findAll')
  .post(userRatingController.findAll);

router.route('/findUserRating')
  .post(userRatingController.findOne);

router.route('/createUserRating')
  .post(userRatingController.create);

module.exports = router;