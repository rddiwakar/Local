const User = require("../model/user.js");
const sendEmail = require("../utils/sendemail.js");
const Post = require("../model/post")

exports.register = async(req,res,next) =>{
    const {username,email,password} = req.body;
    try {
        const finduser = await User.findOne({email})
        if(!finduser){
            const user = await User.create({
                username,email,password
            });
            sendToken(user,201,res)
        }else{
            res.send({success:false})
        }
       
    

    } catch (error) {
        next(error)
    }
}

exports.login = async(req,res,next) =>{
    try {
        const{email,password}= req.body;
        if(!email || !password){
            return next(new Error("please provide email and password"))
        }

        const user = await User.findOne({email}).select("+password");
        if(!user){
            return next(new Error("Invalid Username"))
        }
        
        const isMatch = user.matchPassword(password);
        if(!isMatch){
            return next(new Error("Invalid Password"))
        }
        sendToken(user,200,res)
    } catch (error) {
        next(error);
    }
}

exports.forgotPassword = async(req,res,next) =>{
    const {email} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({
                success:false,
                error:"Email could not be send"
            })
        }
        const userId = user._id;
        await user.save();

        try {
            await sendEmail({
                to: email,
                from: "rahuldiwakar611@gmail.com",
                subject: "Password Reset Link",
                html: `
                    <p>Hello, ${email}, Here is your password reset link: <a href="#">${`http://localhost:5000/resetpassword/${userId}`}</a> <small>${userId}</small></p>
                `,
            });

            res.send("Email Sent");
        } catch (error) {
            console.log(error)
        }
    } catch (error) {
        
    }
}
exports.resetPassword = async (req,res,next) =>{
    try {
        const {newpassword} = req.body;
        const id = req.params.id

        const updatedUser = await User.findByIdAndUpdate(id,{password:newpassword}, {new: true});
        updatedUser.save().then(() => res.send(updatedUser));
    } catch (error) {
        next(error);
    }
}
exports.deleteUser = async (req,res,next) =>{
    const {id} = req.params;
    try {
        await User.deleteOne({_id:id});
        await Post.deleteMany({createdby:id});
        res.send("user deleted")
    } catch (error) {
        next(error)
    }
}
const sendToken = (user,statuscode,res) =>{
 const token = user.getSignedToken();
 res.status(statuscode).json({user, success:true, token})
}