const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:100
        },
        discription:{
            type:String,
            required:true,
            maxLength:100
        },
        createAt:{
            type:Date,
            required:true,
            default:Date.now()
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now()
        }
    }
)

module.exports = mongoose.model('ToDo', todoSchema);