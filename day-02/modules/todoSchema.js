const mongoose = require('mongoose')

const dbSchema = mongoose.Schema( {
    title:{
        type:String, 
        required:true,
        maxLength:100
    },
    desc:{
        type:String,
        required:true,
        maxLength:100
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        required:true,
        default:Date.now()
    },
})

module.exports = mongoose.model("Todo" , dbSchema);