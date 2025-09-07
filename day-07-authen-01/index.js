const express = require('express')
const cookieParser = require('cookie-parser');
const app = express()
require('dotenv').config()
const port = process.env.PORT;

// middleware 
app.use(cookieParser());
app.use(express.json());
const connection = require("./config/database")
connection();
// route import and mount  // mountin
const user= require('./router/user');
app.use("/api/v1", user);

app.listen(port, ()=>{
    console.log("app run at port no "+port)
})

app.get("/" , (req, res)=>{
    res.send("hii ji ")
})