const express = require("express");
const router = express.Router();
const { getPrivateData} = require("../controller/private.js");
const { protect } = require("../middleware/auth.js");
const upload = require("../utils/multer");

router.route("/").get(protect, getPrivateData);
router.route("/upload-avatar").patch(
    protect,
    upload.single("avatar"),
    function(req, res, next) {
        // Update user avatar here with path (http://localhost:5000/${req.file.path})
        
        res.send("Image uploaded successful");
    }
);

module.exports = router;