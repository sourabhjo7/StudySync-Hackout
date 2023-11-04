const mongoose = require("mongoose");

const videoschema=new mongoose.Schema({
    thumbnail: {type:String,required:true},
    title: {type:String,required:true},
    videoId:{type:String,required},
   // playlistID:{type:String,required:true},
   // description:{type:String,require}
    watched:{type:String,default:false}
});


module.exports = mongoose.model("Video", videoschema);