const express = require('express')
const app = express();

app.listen(3000, ()=>{
    console.log("Re raushan tu chinar hai port no 3000 pe jo")
})

app.get('/', (req, res)=>{
    res.send("Ji Hai");
})

const bodyParse = require('body-parser');
app.use(bodyParse.json())

app.post('/api/item', (req, res)=>{
    const {name, age} = req.body;
    console.log(name)
    console.log(age)
    res.send("Detials added successfully")
})

const mongoose = require('mongoose')


// it is a promises 
mongoose.connect('mongodb://localhost:27017/RDatabS', {
    useUnifiedTopology:true,
    useNewUrlParser:true
})
.then( ()=>{console.log("Connection Successfull")})
.catch(error=>{
    console.log("Recieve an error" + error)
})
// mongodb://localhost:27017
