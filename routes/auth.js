const express = require("express");
const router = express.Router();
const {register,login,forgotPassword,resetPassword,deleteUser} = require("../controller/auth.js")

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgotpassword").post(forgotPassword);
router.route("/resetpassword/:id").patch(resetPassword);
router.route("/user/deleted/:id").delete(deleteUser);
module.exports = router; 
