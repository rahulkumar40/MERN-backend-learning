const Todo = require("../models/ToDo");


// define route handler
// it is put type 
exports.updateTodo = async(req, res)=>{
    try{
        const {id} = res.params;
        const {title,description} = req.body;

        const todo = await Todo.findByIdAndUpdate({_id:id},
            {title, description, updatedAt:Date.now()},
        )

        res.status(200).json({
            success:true,
            data:todo,
            message:"updated successfully"
        })

    }
    catch(err){
        console.log(err);
        res.status(404)
        .json({
            success:false,
            error:err.message,
            message:'server error'
        })
    }
}