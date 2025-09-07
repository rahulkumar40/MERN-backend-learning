const express = require('express')

const router = express.Router()
const { singup,login}= require("../controllers/Authen");

const {auth, isStudent, isAdmin}= require('../middleware/auth')
router.post('/login',login)
router.post('/signup',singup)

// testing route for single authenticaation .... 
router.get("/test", auth , (req, res)=>{
    res.json({
        success:true,
        message:"Welcome to the Protected route for Test",
    });
})

// Protected route 
router.get("/student", auth, isStudent, (req, res)=>{
     res.json({
        success:true,
        message:"Welcome to the Protected route for Student",
    });
})

router.get("/admin", auth, isAdmin, (req, res)=>{
     res.json({
        success:true,
        message:"Welcome to the Protected route for Admin",
    });
})

router.get('/getEmail', auth, (req,res)=>{
    const id = req.user.id;
    console.log("ID : ", id);
    res.json({
        success:true,
        message:"Email Route",
        String:id
    })
})

module.exports = router;