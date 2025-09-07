// app create 
const express = require('express')
const app = express();
// find port 

require('dotenv').config();
const PORT = process.env.PORT_NO;


// db se connect krna 
// importing config file --> database or cloudinary 
const connect = require("./config/database");
connect();

// middleware add krna h 
app.use(express.json());
const fileupload = require('express-fileupload');
app.use(fileupload({
    useTempFiles:true,
    tempFileDir:'/tmp/'
}));

// cloud se connect krna hai

const cloudinaryR = require('./config/cloudinary')
cloudinaryR.cloudinary();

// api route mount krna hai 
const router = require('./routes/fileUpload')
app.use("/api/v1", router);

// activate sercer 


app.listen(PORT, ()=>{
    console.log("App connected at port no "+PORT);
})
