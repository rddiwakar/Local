const User = require("../model/user");
const fetchNews = require("../utils/newsapi")
exports.getPrivateData = async (req,res,next) =>{
    try {
        const user = await User.findById(req.user._id).populate("posts").populate({path:"likedpost",populate:{path: "createdby"}});
        res.status(200).json({
            success:true,
            user,
            message:"you get access to the private data on this route"
        })
    } catch (error) {
        next(error);
    }
}
exports.createAvatar = async function(req, res, next) {
    try {
        // Update user avatar here with path (http://localhost:5000/${req.file.path})
        const user = await User.findOne({email:req.user.email})
        
        user.avatar = `${window.location.origin}/${req.file.path}`
        user.save();

        res.send("Image uploaded successful");
    } catch (error) {
        next(error)
    }
}
exports.getNews = async (req,res,next) =>{
  try {
    const { q } = req.query;

    fetchNews(q)
        .then(response => res.json(response));
  } catch (error) {
    next(error);
  }
}
exports.changeUsername = async(req,res,next) =>{
    const username = req.body.username
    try {
        const user = await User.findOne({email:req.user.email});
        user.username = username;
        user.save();
        res.send({message:"Username change successfully", user})
    } catch (error) {
        next(error)
    }
}
exports.changeEmail = async(req,res,next) =>{
    const {newemail,oldemail} = req.body;
    try {
        const user = await User.findOne({email:oldemail});
        user.email = newemail;
        user.save();
        res.send({message:"Email change successfully" , user})
    } catch (error) {
        next(error)
    }
}
exports.createBio = async(req,res,next) =>{
    const {bio} = req.body;
    try {
        const user = await User.findOne({email:req.user.email})
        user.bio = bio;
        user.save();
        res.send({message:"bio created", user})
    } catch (error) {
        next(error)
    }
}
exports.changePassword = async(req,res,next)=>{
    const {oldpassword,newpassword} = req.body;
    console.log("change password");

    try{
        const user = await User.findOne({email:req.user.email});
        const validate = user.matchPassword(oldpassword);
        if(validate){
            user.password = newpassword ;
            res.send({message:"Password Change Successfully", user})
            user.save();
        }else{
            res.send({message:"OldPassword Error"})
        }
    } catch (error) {
        next(error)
    }
}
