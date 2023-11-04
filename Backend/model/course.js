const mongoose = require("mongoose");

const courseschema=new mongoose.Schema({
    thumbnail:{type:String,required:true} ,
    title: {type:String,required:true},
    playlistID:{type:String,required:true},
    videos:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Video"
    }]
});


module.exports = mongoose.model("Course", courseschema);