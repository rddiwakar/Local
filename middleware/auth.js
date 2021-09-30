const JWT = require ("jsonwebtoken");
const User= require("../model/user.js");

exports.protect = async(req,res,next) =>{
    let token;
    if(req.headers.authorization){
        token = req.headers.authorization.split(" ")[1]
    }
    if(!token){
        return next(new Error("Not authorized to access this route"));
    }
    try {
        const decoded = JWT.verify(token,process.env.JWT_SECRET);
        const user =  await User.findById(decoded.id);
        if(!user){
            return res.status(404).json({
                success:false,
                error:"No user found with this id"
            })
        }
        req.user = user;
        next()
    } catch (error) {
        next(error);
    }
}