// const Todo = require("../models/ToDo");

// // default rout randler ...

// exports.getTodo = async(req , res)=>{
//     try{
//         // fetch all todo items from database .... 
//         const todos = await Todo.findById({}); 
//         // response 
//         res.status(200)
//         .json({
//             success:true,
//             data:todos,
//             message:"entire tod data is fetched",
//         })
//     }
//     catch(error){
//         console.log(error)
//         res.status(500)
//         .json({
//             success:false,
//             error:error.message,
//             message:"server error",
//         })
//     }
// }