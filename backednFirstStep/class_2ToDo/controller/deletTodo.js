const Todo = require("../models/ToDo");


exports.deleteTodo = async(req,res)=>{
    try{
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);
        res.json({
            success:true,
            message:"Delete succeessfully"
        })
    }
    catch(err){
        console.log(err)
        res.status(400)
        .json({
            success:false,
            message:err.message
        })
    }
}