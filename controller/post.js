const Post = require("../model/post");
const User = require("../model/user");

//const { dataUri } = require("../utils/multer");
//const cloudinary = require("cloudinary").v2;

exports.createPost = async (req, res, next) => {
    const { content, tags } = req.body

    try {
        let image = "";

        if (req.file) {
            image = `${process.env.IMAGE_URL}${req.file.path}`
            // const file = dataUri(req).content;
            // const result = await cloudinary.uploader.upload(file)
            // console.log (result)
            // image = result.url
        }

        const post = await Post.create({
            content,
            image,
            tags,
            createdby: req.user._id
        });

        const updatedUser = await User.findByIdAndUpdate(req.user._id, { $push: { posts: post._id } }, { new: true }).populate("posts").populate({ path: "likedpost", populate: { path: "createdby" } });

        res.send({ post, updatedUser });
    } catch (error) {
        next(error)
    }

};
exports.likePost = async (req, res, next) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id);
        let updatedUser = {};
        const alreadyLiked = post.likes.includes(req.user._id);

        if (!alreadyLiked) {
            await Post.findByIdAndUpdate(post._id, { $push: { likes: req.user._id } });
            updatedUser = await User.findByIdAndUpdate(req.user._id, { $push: { likedpost: post._id } }, { new: true }).populate("posts").populate({
                path: "likedpost",
                populate: {
                    path: "createdby"
                }
            });
        } else {
            await Post.findByIdAndUpdate(post._id, { $pull: { likes: req.user._id } });
            updatedUser = await User.findByIdAndUpdate(req.user._id, { $pull: { likedpost: post._id } }, { new: true }).populate("posts").populate({
                path: "likedpost",
                populate: {
                    path: "createdby"
                }
            });;
        }

        res.json({ post, updatedUser });
    } catch (error) {
        next(error)
    }
}
exports.deletePost = async (req, res, next) => {
    const { id } = req.params;
    try {
        await Post.deleteOne({ _id: id });
        const updatedUser = await User.findByIdAndUpdate(req.user._id, { $pull: { posts: id } }, { new: true }).populate("posts").populate({ path: "likedpost", populate: { path: "createdby" } });
        res.send({ updatedUser })
    } catch (error) {
        next(error)
    }
}
exports.getAllPost = async (req, res, next) => {
    try {
        const allPost = await Post.find({}).populate("createdby")
        res.send(allPost)
    } catch (error) {
        next(error)
    }
}