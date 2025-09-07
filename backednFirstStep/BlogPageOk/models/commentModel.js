const mongoose = require('mongoose')

const commentScheme = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",// //referece to post model
    },
    user:{
        type:String,
        required:true,
    },
    body:{
        type:Date,
        required:true,
    }
})

module.exports = mongoose.model("Comment", commentScheme);