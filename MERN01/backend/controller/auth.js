const User = require("../models/userDetail")
const express = require("express")
module.exports.singUp = async(req, res)=>{
    try{
        const {name, email, password, role} = req.body;

        const newUser = await User.create({
            name, email, password, role
        });

        if(k){
        
        }

        res.status(201).json({
            success:true,
            message:"User register successfully.."
        })
    }
    catch(err){
        console.log("Error in controller..")
    }
}