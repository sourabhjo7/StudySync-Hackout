const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Course = require("../model/course");
const User = require("../model/user");

//linked to /
exports.home = (req, res) => {
  res.status(200).json({
    msg: "TOKEN present",
    data: req.userData,
  });
};

//linked to /add-course
// POST  thumbnail:{type:String,required:true} ,title: {type:String,required:true}, playlistID:{type:String,required:true},
exports.AddCourse = async (req, res) => {
  try {
    console.log("this is add course route -->",req.body);
    const userid = req.userData.id;
    const user = await User.findOne({_id:userid});
    console.log(req.userData, "---", userid);
    let existingCourse = await Course.findOne({
      playlistID: req.body.playlistID,
    });
    console.log("existing",existingCourse);
    //if course not in data base create it
    if (!existingCourse) {
      existingCourse = await Course.create(req.body);
      console.log("course made",existingCourse);
    }
    const courseId = existingCourse._id;
    if (user.subscribedplaylists.includes(courseId)) {
      return res.status(200).json({
        success: false,
        msg: "course is already present in courses",
        course: existingCourse,
        user: user,
      });
    }
    user.subscribedplaylists.push(courseId);
    await user.save();
    return res.status(200).json({
      success: true,
      msg: "course is Added",
      course: existingCourse,
      user: user,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      success: false,
      msg: "try again",
      error: e,
    });
  }
};
