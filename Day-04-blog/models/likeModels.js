// import mongoose 
const mongoose = require('mongoose')

//handle route

const likeSchma = new mongoose.Schema({
        post:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post" // reference to postModels 
    
        }
        ,user:{
            type:String,
            required:true
        }
})

module.exports = mongoose.model("Like",likeSchma);
