const cloudinary = require("cloudinary").v2;

const cloudinaryConfig = (req, res, next) => {
    cloudinary.config({ 
        cloud_name: process.env.cloud_name, 
        cloud_api_key: process.env.cloud_api_key, 
        cloud_api_secret: process.env.cloud_api_secret,
        secure: true
    });

    next();
}

module.exports = cloudinaryConfig;