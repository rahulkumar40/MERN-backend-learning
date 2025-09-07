const Todo = require('../modules/ToDo');

exports.createTodo = async(req, res)=>{
    try{
        const {title, discription} = req.body;

        const response = await Todo.create({title, discription});

        res.status(200)
        .json({
            success:true,
            data:response,
            message:"Entry created successfully..."
        })
    }
    catch(error){
        console.log("Error occur"+error)
        res.status(500)
        .json({
            success:false,
            data:'internal server error',
            message:error.message
        })
    }
}

