
// import the model 
const Todo = require("../models/Todo")

// define the route handler

exports.createTodo = async (req, res)=>{
    try{
        // extract title and description from request body

        const {title, description} = req.body;

        // create a new todo obj and insert in db 

        const response = await Todo.create({title,description});

        //  send a json response with a success flag

        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entery created successfully'
            }
        )
    }
    catch(err){
        console.error(err);
        console.log("Error occure");
        res.status(500)
        .json( {
            success:false,
            data:"internal server error",
            message:err.message,
        })

    }
    
}

// i used  async :: i don't want to disturb all the component ..
// .... database interation me main treat distrub na ho to 
// async used krte hai

