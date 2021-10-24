const Post = require("../model/post");
const User = require("../model/user");
const mongoose = require("mongoose");
exports.createPost = async(req,res,next)=>{
    const {content,tags} = req.body

    try { 
        const post = await Post.create({
            content,
            image: req.file ? `https://local-world.herokuapp.com/${req.file.path}` : "" ,
            tags,
            createdby: req.user._id
        });

        const updatedUser = await User.findByIdAndUpdate(req.user._id, {$push: {posts: post._id}},{new: true}).populate("posts").populate({path:"likedpost", populate:{path:"createdby"}});

        res.send({post,updatedUser});
    } catch (error) {
        next(error)
    }
    
};
exports.likePost = async(req,res,next) =>{
    const {id}= req.params;
    try {
        const post = await Post.findById(id);
        let updatedUser = {};
        const alreadyLiked = post.likes.includes(req.user._id);
        
        if(!alreadyLiked) {
            await Post.findByIdAndUpdate(post._id, {$push: {likes: req.user._id}});
            updatedUser = await User.findByIdAndUpdate(req.user._id, {$push: {likedpost: post._id}}, {new: true}).populate("posts").populate({
                path: "likedpost",
                populate: {
                    path: "createdby"
                }
            });
        } else {
            await Post.findByIdAndUpdate(post._id, {$pull: {likes: req.user._id}});
            updatedUser = await User.findByIdAndUpdate(req.user._id, {$pull: {likedpost: post._id}}, {new: true}).populate("posts").populate({
                path: "likedpost",
                populate: {
                    path: "createdby"
                }
            });;
        }

        res.json({post, updatedUser});
    } catch (error) {
        next(error)
    }
}
exports.deletePost = async(req,res,next) =>{
    const {id} = req.params;
    try {
        await Post.deleteOne({_id:id});
        const updatedUser = await User.findByIdAndUpdate(req.user._id, {$pull:{posts:id}},{new:true}).populate("posts").populate({path:"likedpost", populate:{path:"createdby"}});
        res.send({updatedUser})
    } catch (error) {
        next(error)
    }
}
exports.getAllPost = async(req,res,next) =>{
    try {
        const allPost = await Post.find({}).populate("createdby")
        res.send(allPost)
    } catch (error) {
        next(error)
    }
}