const mongoose = require("mongoose");
const cousreSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    price:{
         type:Number,
    },
    author:{
        type:String,
    },
    author_id:{
        type:String
    },

    student:{
        type:[String],
        default:[],
    },
});


const Course = mongoose.model("Course",cousreSchema);
module.exports = Course;