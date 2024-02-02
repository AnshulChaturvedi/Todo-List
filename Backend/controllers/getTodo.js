const Todo = require("../models/Todo");

exports.getTodo = async(req,res) => {
    try{
        const todos = await Todo.find({});

        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo Data is fetched",
        });
    }
    catch(err){
        console.error(err),
        console.log(err),
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Error detected",
        });
    }
}

exports.getTodoById = async(req,res) => {
    try{
        const id = req.params.id;
        const todo = await Todo.findById({_id:id});

        if(!todo){
            return res.status(404)
            .json({
                success:false,
                message:"No Data Found By the Given ID",
            });
        }
        res.status(200)
        .json({
            success:true,
            data:todo,
            message:`Data for the given ID ${id} is found`,
        });
    }
    catch(err){
        console.error(err),
        console.log(err),
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Error in the Server",
        });
    }
}