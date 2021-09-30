const express = require("express");
const router = express.Router();
const { getPrivateData,createAvatar} = require("../controller/private.js");
const { protect } = require("../middleware/auth.js");
const upload = require("../utils/multer");
const {createPost,likePost} = require("../controller/post")


router.route("/").get(protect, getPrivateData);
router.route("/upload-avatar").patch(
    protect,
    upload.single("avatar"),
    createAvatar
);
router.route("/post").post(protect,createPost);
router.route("/post/like/:id").patch(protect,likePost);


module.exports = router;