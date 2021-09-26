
const User = require("../model/user.js");


exports.register = async(req,res,next) =>{
    const {username,email,password} = req.body;
    try {
       const user = await User.create({
           username,email,password
       });
       sendToken(user,201,res)
    

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
        const user = await User.findOne();
        if(!user){
            return res.status(404).json({
                success:false,
                error:"Email could not be send"
            })
        }
        const resetToken = user.getResetPasswordToken();
        await user.save();
        const resetUrl = `http://localhost:4000/passwordreset/${resetToken}`;
        const message = `
            <h1>You have requested a password rest</h1>
            <p>please go to this link for reset password</p>
            <a href = ${resetUrl} clicktracking == off>${resetUrl}</a>
        `
        try {
            
        } catch (error) {
            
        }
    } catch (error) {
        
    }
}
exports.resetPassword = (req,res,next) =>{
    res.send("reset password route")
}

const sendToken = (user,statuscode,res) =>{
 const token = user.getSignedToken();
 res.status(statuscode).json({success:true, token})
}