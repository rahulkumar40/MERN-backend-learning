const Todo = require("../models/ToDo");

// default rout randler ...


exports.createTodo = async(req , res)=>{
    try{
        // extract  title and "description from reauset body"
        const {title, desc} = req.body;

        // creat  an ew todo obj and insert in db 
        const response = await Todo.create({title,desc});

        // send  a json response with a succes flag

        res.status(200).json(
            {
                succuss:true,
                data:response,
                message:'Entery created successfully'
            }
        )
    }
    catch(error){
        console.error(error);
        console.log(error);
        res.status(500)
        .json( {
            sucess:false,
            data:'internal server error',
            message:error.message
        })
    }
}