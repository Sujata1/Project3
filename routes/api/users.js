const router = require("express").Router();
const usersController = require("../controllers/userController");


router.route("/find")
  .post(usersController.findOne);

router.route("/")
  .post(usersController.create);
  
module.exports = router;
