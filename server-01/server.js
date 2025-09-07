const express = require('express')
const mongoose = require('mongoose')
const bodyParse = require('body-parser')

const app = express()


mongoose.connect('mongodb://localhost:27017/myItem', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then( ()=>{console.log("Connection succefully done !")})
.catch( (err)=>{console.log("error occurred ") + err});


// creating schema of mongo db

const userDetails = new mongoose.Schema({
    name:String, 
    age:Number,
})

const users = mongoose.model('users', userDetails);

app.use(bodyParse.json())

app.post('/user', async(req, res)=>{
    const {name, age} = req.body;
    try{
        console.log("Name is "+name)
        console.log("Age is "+age);
        res.send("Yes did it");
    }
    catch( err){
        console.log("Error occureed "+err)
    }
})

app.get('/', async(req,res)=>{
    try{
        res.send("Welcome to this page")
    }
    catch(err){
        res.send("There is some issue")
    }
})

app.listen(7000, ()=>{
    console.log("Server started at port no 70000")
})