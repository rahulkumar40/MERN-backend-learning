
// importing express module to implement the backend execution with the code 
const express = require('express');
const { default: mongoose } = require('mongoose');


// initiating the express to the app body
const app = express();

// configuring the .env -> PORT no
require('dotenv').config()
const PORT = process.env.PORT;
// host the server at any port no 

app.listen(PORT,()=> {
    console.log("Welcome to port no "+PORT + " I am you host Rahul Kumar...")
})

// display content of my backend at default ui port 

app.get('/', (req,res)=>{
    res.send("Hi Rahul, I am running on page.....")
})

// connecting mongodb with this server...
// again configuring DATABASE_URL a
const dataBaseURL=process.env.DATABASE_URL
const k = require("mongoose");
k.connect('mongodb://localhost:27017', {
    useUnifiedTopology:true,
    useNewUrlParser:true
}
).then( ()=>{console.log("Connection successfully checked...")})
.catch( (err)=>{
    console.log("Error occur - "+err);
})

const bodyParse = require('body-parser');
app.use(bodyParse.json());

app.post('/item', (req, res)=>{
    const {name, age}= req.body;
    console.log("My name is "+name);
    console.log("My age is "+age);
    res.send("Data added successfully...")

})

