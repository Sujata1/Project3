const router = require("express").Router();
const articleRoutes = require("./users");

console.log("users api routes included");

// Book routes
router.use("/users", articleRoutes);

module.exports = router;
