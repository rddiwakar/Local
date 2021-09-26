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