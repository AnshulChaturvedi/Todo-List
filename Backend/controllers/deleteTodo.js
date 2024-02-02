const Todo = require("../models/Todo");

exports.deleteTodo = async(req,res) => {
    try{
        const id = req.params.id;
        await Todo.findByIdAndDelete(id);

        res.status(200).
        json({
            success:true,
            message:`Todo item with ${id} id has been deleted successfully.`,
        });
    }
    catch(err){
        console.error(err),
        console.log(err),
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Server error found.",
        });
    }
}