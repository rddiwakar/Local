const Post = require("../model/post");
const User = require("../model/user");
const mongoose = require("mongoose");
exports.createPost = async(req,res,next)=>{
    const {content,tags} = req.body

    try { 
        const post = await Post.create({
            content,
            image: req.file ? `http://localhost:5000/${req.file.path}` : "" ,
            tags,
            createdby: req.user._id
        });

        await User.findByIdAndUpdate(req.user._id, {$push: {posts: post._id}});

        res.send(`post made${post}`);
    } catch (error) {
        next(error)
    }
    
};
exports.likePost = async(req,res,next) =>{
    const {id}= req.params;
    try {
        const post = await Post.findById(id);
        const alreadyLiked = post.likes.includes(req.user._id);
        
        if(!alreadyLiked) {
            await Post.findByIdAndUpdate(post._id, {$push: {likes: req.user._id}});
        } else {
            await Post.findByIdAndUpdate(post._id, {$pull: {likes: req.user._id}});
        }

        res.json({post});
    } catch (error) {
        next(error)
    }
}
exports.deletePost = async(req,res,next) =>{
    const {id} = req.params;
    try {
        await Post.deleteOne({_id:id});
        res.send("post deleted")
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