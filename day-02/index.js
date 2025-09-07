const express = require('express')

const app = express()
const dbConnect = require('./config/dataBase')
dbConnect();


require('dotenv').config();
const port = process.env.PORT || 6000;

app.use(express.json());

const postRouter = require('./router/postRouter');

app.use('/api/v1', postRouter)

app.listen(port, ()=>{
    console.log("Server started at "+port)
})

app.get('/', (req, res)=>{
    res.send("Check at "+port)
}
)


