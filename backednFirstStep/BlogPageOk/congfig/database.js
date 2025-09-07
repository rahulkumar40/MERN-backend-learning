const mongoose = require('mongoose')
const express = require('express');

require('dotenv').config();
const PortNumber = process.env.DATABASE_PORT
// check the name of the port is database or server port ..
const dbConnect = ()=>{
 mongoose.connect(PortNumber, {
    useNewUrlParser:true,
    useUnifiedTopology:true
 })
 .then( ()=>{console.log("Connection successfully ....")})
 .catch( (err)=>{
    console.log("Error occure in db connection" + err)
    console.error(err.message);
    process.exit(1);
 })
}
module.exports = dbConnect;