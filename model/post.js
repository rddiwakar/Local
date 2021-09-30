const mongoose = require("mongoose");
const postSchema  = new mongoose.Schema({
    content : {
        type:String,
        maxlength: 180
    },
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    tags:String,
    createdby: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
    
})
const Post = mongoose.model("Post",postSchema);
module.exports = Post;