const Post = require("../model/post");
const User = require("../model/user");
exports.createPost = async(req,res,next)=>{
    const {content,tags} = req.body
    try {
        const post =await Post.create({content,tags});
        const user = await User.findOne({email:req.user.email});
        
        post.createdby = user._id;
        await post.save()
        user.post.push(post._id);
        await user.save();
        res.send(`post made${post}`);
    } catch (error) {
        next(error)
    }
    
}