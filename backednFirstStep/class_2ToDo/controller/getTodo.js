const Todo = require("../models/ToDo");

// default rout randler ...

exports.getTodo = async(req , res)=>{
    try{
        // fetch all todo items from database .... 
        const todos = await Todo.find({}); 
        // response 
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"entire tod data is fetched",
        })
    }
    catch(error){
        console.log(error)
        res.status(500)
        .json({
            success:false,
            error:error.message,
            message:"server error",
        })
    }
}

exports.getTodoById = async(req, res)=>{
    try{
        // extract todo item by id
        
        // 1. data letker aao 
        const id = req.params.id;
        const todo = await Todo.findById( {_id:id});

        // data forgiven id not found

        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data found woth given id",
            })

        }

        res.status(200)
        .json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetcehed`
        })
    }
    catch(err){
        console.log(err);
    }
}