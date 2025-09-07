const express = require('express');

const todo = require('../modules/todoSchema')

exports.createTodo = async(req, res)=>{
    try{
        const {title, desc} = req.body;

        const response = await todo.create({
            title, desc
        })
        res.status(200).json({
            success:true,
            data:response,
            message:'Entry created successfully..'
        })
    }
    catch(err){
        console.log("Error occurred "+err)
        res.status(500).json({
            success:false,
            message:err.message,
            data:'internal server error'
        })
    }
}