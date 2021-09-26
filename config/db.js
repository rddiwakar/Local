require("dotenv").config({path: "./config.env"})
const mongoose = require("mongoose");
const connectdb = async() =>{
     await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser:true,
        useUnifiedTopology:true,   
    })
    console.log("mongodb connected")
}
module.exports = connectdb;