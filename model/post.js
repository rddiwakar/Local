const mongoose = require("mongoose");
const postSchema  = new mongoose.Schema({
    content : {
        type:String,
        maxlength: 180
    },
    likes:{
        type:Number,
        default:0
    },
    tags:String,
    createdby:String
    
})
const Post = mongoose.model("Post",postSchema);
module.exports = Post;