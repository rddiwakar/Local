const express = require("express");
const router = express.Router();
const {register,login,forgotPassword,resetPassword} = require("../controller/auth.js")

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgotpassword").post(forgotPassword);
router.route("/resetpassword/:id").patch(resetPassword);
module.exports = router;
