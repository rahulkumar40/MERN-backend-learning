// import mongooe 
const mongoose = require('mongoose')


// route handler 
const database = require('../config/database');

const commnetSchma = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post" // reference to postModels 

    }
    ,user:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model("Comment", commnetSchma);