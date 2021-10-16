const express = require("express");
const router = express.Router();
const { getPrivateData,createAvatar,getNews} = require("../controller/private.js");
const { protect } = require("../middleware/auth.js");
const upload = require("../utils/multer");
const {createPost,likePost, deletePost, getAllPost} = require("../controller/post")


router.route("/").get(protect, getPrivateData);
router.route("/upload-avatar").patch(
    protect,
    upload.single("avatar"),
    createAvatar
);
router.route("/post").post(
    protect,
    upload.single("image"),
    createPost
);
router.route("/post/like/:id").patch(protect,likePost);

router.route("/post/delete/:id").delete(protect,deletePost);
router.route("/news").get(protect,getNews);
router.route("/getallpost").get(protect,getAllPost)


module.exports = router;