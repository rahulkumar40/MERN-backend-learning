const express = require('express')

const app = express()

app.listen(3000, ()=>{
    console.log("Run at 3000 port")
})

app.get('/', (req, res)=>{
    res.send(`<h1>This is home page baby</h1>`)
})


require('dotenv').config()
const PORT = process.env.PORT_NO;

// middleware 
app.use(express.json()) // if app want to use express instance or data then it can easyly find it .


const blog = require('./routers/blog')
// mount 
app.use('/api/v1', blog);

const dbConnect = require('./config/database');
dbConnect();