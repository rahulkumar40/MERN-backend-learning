const bcrypt = require('bcrypt')
const User = require('../models/user')
const express = require("express")

const jwt = require('jsonwebtoken')
// signup route handler
exports.singup = async(req, res)=>{
    try{
        // get data 
        const {name, email, password, role} = req.body;

        // check if user already exst 
        const existingUser = await User.findOne({email});
// make sure findOn -- > {into it}
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"user already exist"
            })
        }


        // secure password 

        let hashedPassword;
        try{
            hashedPassword=await bcrypt.hash(password,10)
        }
        catch(err){
            return res.status(500).json({
                success:false,
                message:"Error in hash in password"
            })
        }
        // create entry fo user 
        const user = await User.create({
            name, email, password:hashedPassword, role
        })

        res.status(200).json({
            success:true,
            message:"User created successfully"
        })
    }
    catch( err){
        console.log("Error ocuure")
        return res.status(500).json({
            success:false,
            message:"user cannot be registered, please try again latter.."
        })
    }
}

exports.login = async(req, res)=>{
    try{

        // fetch data ...
        const {email, password} = req.body;
        // validation on eamil and password 
        if (!email||!password){
            return res.status(400).json({
                success:false,
                message:"Plase fill all the detais carefully"
            })
        }

        // check for registered user 
        let user = await User.findOne({email});

        
        // if not a registered user 
        if(!user){
            return res.status(401).json({
                success:false,
                message:"User is not register"
            })
        }

        // importin jwt_screat through .env
        require('dotenv').config()
        const k = process.env.JWT_SCRET;


        const payload ={
            email:user.email,
            id:user._id,
            role:user.role,
        };
        // const 
        // verify password and generate a JWT token 
        if(await bcrypt.compare(password, user.password)){
            // password matched --> login.... 
            let token = jwt.sign(payload, k,
                {
                    expiresIn:"2h"
                })


            // console.log(user) // tesing phase 1 
            // const oldUser = {...user, token};
            
            user = user.toObject();
            // console.log(user) // tesing phase 1 
            user.token = token;
            user.password = undefined;
            // console.log(user) // tesing phase 1 

            const options = {
                expires:new Date(Date.now() +  30000),
                httpOnly:true, // not visible for client side..
            }
            res.cookie("Token", token,options).status(200).json({
            success:true,
            token,
            user,
            message:"User login successfully.",
               
            })
        //  res.status(200).json({
        //     success:true,
        //     token,
        //     user,
        //     message:"User login successfully.",
               
        //     })
        }
        else{
            return res.status(403).json({
                success:false,
                message:"Password Incorrect"
            })
        }
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Login failure."
        })
    }
}