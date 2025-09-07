const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const dataBaseURL = process.env.DATABASE_URL || 'mongodb://localhost:27017/myDatabase';

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(dataBaseURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => console.log("Connection successfully checked..."))
.catch((err) => console.log("Error occurred - " + err));

// Define a schema and model
const itemSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Item = mongoose.model('Item', itemSchema);

// Routes
app.get('/', (req, res) => {
    res.send("Hi Rahul, I am running on page.....");
});

app.post('/item', async (req, res) => {
    const { name, age } = req.body;

    try {
        const newItem = new Item({ name, age });
        await newItem.save();
        res.send("Data added successfully...");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error saving data.");
    }
});

// Start the server
app.listen(PORT, () => {
    console.log("Welcome to port no " + PORT + " I am your host Rahul Kumar...");
});
