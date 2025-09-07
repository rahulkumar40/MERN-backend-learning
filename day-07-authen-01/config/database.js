const mongoose = require('mongoose')

require('dotenv').config();
const dataUrl = process.env.DATABASE_URL;
const connect = ()=>{
    mongoose.connect(dataUrl)
    .then(()=>{console.log("DB Connection succfully")})
    .catch((e)=>{
        console.log("Error occure f"+e)
        process.exit(1);
    })
}

module.exports = connect;