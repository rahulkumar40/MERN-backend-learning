
const express = require('express');
const router = express.Router();
const {createTodo} = require('../controller/createTodo')

router.post('/createTodo', createTodo);

// to get data 
const {getTodo} = require('../controller/getTodo')
router.get('/getTodo', getTodo);
module.exports = router;