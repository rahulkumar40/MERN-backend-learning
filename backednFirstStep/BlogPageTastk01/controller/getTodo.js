const Todo = require('../modules/ToDo')

exports.getTodo = async(req, res)=>{
    try{
        const response = await Todo.find({});
        res.status(200).json({
            success:true,
            data:response,
            message:"entire data is fetched"
        })
    }
    catch(error){
        console.log(error + "error aya ji");
        res.status(500).json({
            success:true,
            message:"server error",
            error:message.error
        })
    }
}