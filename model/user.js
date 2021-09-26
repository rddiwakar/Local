const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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
    }
});
userSchema.pre("save", function(next){
    console.log("Inside pre save");
    if(!this.isModified("password")){
        next()
    }
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});
userSchema.methods.matchPassword =  function(password){
    console.log(bcrypt.compareSync(password, this.password))
    return  bcrypt.compareSync(password, this.password);
}

userSchema.methods.getSignedToken = function(){
    return JWT.sign({id:this._id},process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE})
}

const user = mongoose.model("user", userSchema);

module.exports = user;