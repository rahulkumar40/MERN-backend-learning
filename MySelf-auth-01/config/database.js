const mongoose = require('mongoose')

require('dotenv').config()
const dataBaseUrl = process.env.DATABASE_URL;
const connection = ()=>{
    mongoose.connect(dataBaseUrl)
    .then( ()=>{console.log("DB connection successfully..")})
    .catch((err)=>{console.log("Error found")
        console.error(err.message);
    })
}

module.exports = connection;