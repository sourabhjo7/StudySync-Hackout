const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const course = require('../model/course');

//linked to /
exports.home = (req, res) => {
    res.status(200).json({
        msg: "TOKEN present",
        data: req.userData,
    });
}

//linked to /add-course 
// POST  thumbnail:{type:String,required:true} ,title: {type:String,required:true}, playlistID:{type:String,required:true},
exports.AddCourse= async (req,res)=>{
   try{
    console.log("this is add course route ");
    console.log(req.body);
    const playlistData=req.body;
    const userid=req.userData.id;
    const user=await User.findbyId(userid);
    console.log(req.userData,"---",userid);
    let existingCourse=await course.find({playlistID:playlistData.playlistID});
     //if course not in data base create it 
    if(existingCourse.length===0){
    let=existingCourse=new course({thumbnail:playlistData.thumbnail,title:playlistData.title,playlistID:playlistData.playlistID});
    }
     const courseId=existingCourse._id;
     user.subscribedplaylists.push(courseId);
     await user.save();
    res.status(200).json({
        success:true,
        course:existingCourse,
        user:user
    })
   }
   catch(e){
    res.status(400).json({
        success:false,
        error :e
    })
   }
}


