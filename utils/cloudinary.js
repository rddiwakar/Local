const Cloudinary = require("cloudinary").v2;

const cloudinaryConfig = (req, res, next) => {
    Cloudinary.config({ 
        cloud_name: process.env.Cloudinary_name, 
        cloud_api_key: process.env.Cloudinary_api_key, 
        cloud_api_secret: process.env.Cloudinary_api_secret,
        
    });

    next();
}

module.exports = cloudinaryConfig;