const User = require("../model/user")
exports.getPrivateData = (req,res,next) =>{
    try {
        res.status(200).json({
            success:true,
            user: req.user,
            data:"you get access to the private data om this route"
        })
    } catch (error) {
        next(error);
    }
}
exports.createAvatar = async function(req, res, next) {
    try {
        // Update user avatar here with path (http://localhost:5000/${req.file.path})
        const user = await User.findOne({email:req.user.email})
        
        user.avatar = `http://localhost:5000/${req.file.path}`
        user.save();

        res.send("Image uploaded successful");
    } catch (error) {
        next(error)
    }
}