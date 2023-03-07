const express = require("express");
const router = express.Router();
const UserCtrl = require("../controllers/UsersController");

router.post("/user/register", UserCtrl.register);
router.post("/user/login", UserCtrl.login);
router.post("/verifyEmail", UserCtrl.updateStatus); 

module.exports = router;