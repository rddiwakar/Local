const express = require("express");
const router = express.Router();
const { getPrivateData} = require("../controller/private.js");
const { protect } = require("../middleware/auth.js");

router.route("/").get(protect, getPrivateData);

module.exports = router;