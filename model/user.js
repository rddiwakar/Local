const mongoose = require("mongoose");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const JWT  =  require ("jsonwebtoken")
const userSchema = new mongoose.Schema ({
    username:{
        type:String,
        required:[true,"Please provide a userName"]
    },
    email:{
        type:String,
        required:[true, "Please provide a email"],
        unique:true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email",
          ],
       },
    password:{
        type:String,
        required:[true,"Please add a password"],
        minlength: 6,
        select: false
    },
    resetpasswordtoken:String,
    resetpasswordexpire:Date
});
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
});
userSchema.methods.matchPassword =  function(password){
    console.log(bcrypt.compareSync(password, this.password))
    return  bcrypt.compareSync(password, this.password);
}

userSchema.methods.getSignedToken = function(){
    return JWT.sign({id:this._id},process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE})
}
userSchema.methods.getResetPasswordToken = function(){
    const resetToken = crypto.randomBytes(20).toString("hex");
    this.resetpasswordtoken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetpasswordexpire = Date.now() + 10 *(1000*60)
    return resetToken
}

const user = mongoose.model("user", userSchema);

module.exports = user;