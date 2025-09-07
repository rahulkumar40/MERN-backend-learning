// step 1 : create a folder
///step2: move into that flder
//step3: npm init -y
//step4: open folder using vscod 
// npm5 : npm i express 


const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log("Server started at port no 3000 port ..")
})

app.get('/', (req, res)=>{
    res.send("Hello Jee, Keise ho saare");
})


// used to parse req.body in express --> put ar post used in general ....
const bodyParser = require('body-parser')
app.use(bodyParser.json());


// specifically parse json data and add it to the request.body objecy 

app.post('/api/cars',(request, response)=>{
    const {name, brand} = request.body;
    console.log(name)
    console.log(brand)
    response.send("Car submitted successfullly....")
})


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CollectionCars',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("Connection successfully")})
.catch(()=>{console.log("Recieve an error")})
