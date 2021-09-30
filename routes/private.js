const express = require("express");
const router = express.Router();
const { getPrivateData} = require("../controller/private.js");
const { protect } = require("../middleware/auth.js");
const upload = require("../utils/multer");
const User = require("../model/user")

router.route("/").get(protect, getPrivateData);
router.route("/upload-avatar").patch(
    protect,
    upload.single("avatar"),
    async function(req, res, next) {
        try {
            // Update user avatar here with path (http://localhost:5000/${req.file.path})
            const user = await User.findOne({email:req.user.email})
            
            user.avatar = `http://localhost:5000/${req.file.path}`
            user.save();

            res.send("Image uploaded successful");
        } catch (error) {
            next(error)
        }
    }
);

module.exports = router;