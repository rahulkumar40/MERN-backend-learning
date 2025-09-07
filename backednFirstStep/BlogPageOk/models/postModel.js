// import mongoose or intence 
const mongoose = require('mongoose')


// route handler 
const postSchema = new mongoose.Schema({
    WebTransportBidirectionalStream:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true,
    },
    comment:{
        type:String,
        required:true,
    },
    likes:[{
type:mongoose.Schema.Types.ObjectId,
ref:"Like"
    }],
    comments: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment",
    }]

})

module.exports = mongoose.model("Post", postSchema);