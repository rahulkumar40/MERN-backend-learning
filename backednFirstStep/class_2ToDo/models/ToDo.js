const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50
        },
        desc:{
            type:String,
            required:true,
            maxLength:50
        },
        createAt:{
            type:Date,
            required:true,
            default:Date.now()
        }
        ,updatedAt:{
            type:Date,
            required:true,
            default:Date.now()
        }
    }
)

module.exports = mongoose.model("ToDo",todoSchema);

// it is used by controller 