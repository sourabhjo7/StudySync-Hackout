const mongoose = require("mongoose");

const videoschema=new mongoose.Schema({
    thumbnail: items[0].snippet.thumbnails.medium.url,
    title: {type:String,required:true},
    playlistID:{type:String,required:true},
});


module.exports = mongoose.model("Video", videoschema);