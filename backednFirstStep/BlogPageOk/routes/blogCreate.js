const express = require('express')

const router = express.Router()

// Import controller. 
const {createBlog} = require('../controller/createBlog')

//Mapping creation 
router.post('/createBlog',createBlog)


// exporting router to whole server....
module.exports = router;

// express to inteace created --. lin 1 
// router take --> to create route though server......  3 
