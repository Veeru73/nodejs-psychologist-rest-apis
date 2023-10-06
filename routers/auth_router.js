const router = require("express").Router();
const authController = require("../controllers/auth_controller");

router.post("/join", authController.join);

module.exports = router;
