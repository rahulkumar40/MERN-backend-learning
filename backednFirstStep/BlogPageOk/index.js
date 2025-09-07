const express = require('express');
const app = express();


// middle ware 
app.use(express.json());

// const blogRoutes = require('./routes/blogCreate')

// mount i + path kkkkk
// app.use('/api/v2', blogRoutes);

const dbConnect = require('./congfig/database');
dbConnect(); // ye ek function hai config/database me to call to hoga hi....

const dummpy = require('./routes/dummyRouter');


app.use('/api/v2', dummpy);



app.listen(3000, ()=>{
    console.log("server run at 3000 port no")
})