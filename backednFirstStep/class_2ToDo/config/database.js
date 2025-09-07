
const mongoose = require('mongoose');

require('dotenv').config();
const dbConnect= ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then( ()=>{console.log("Db ka connection is successful")})
    .catch((error)=>{
        console.log("Issue in db connection");
        console.error(error.message);
        // isk aky mtlb hai ? 
        process.exit(1);

    });

}

module.exports = dbConnect;


