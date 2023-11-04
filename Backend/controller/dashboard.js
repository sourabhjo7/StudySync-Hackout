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
    console.log("this is add course route -->", req.body);
    const userid = req.userData.id;
    const user = await User.findOne({ _id: userid });
    let existingCourse = await Course.findOne({
      playlistID: req.body.playlistID,
    });
    console.log("existing", existingCourse);
    //if course not in data base create it
    if (!existingCourse) {
      existingCourse = await Course.create(req.body);
      console.log("course made", existingCourse);
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

exports.getCoursesByUser = async (req, res) => {
  try {
    const uid = req.userData.id;
    const coursesbyuser = await User.findOne({ _id: uid }).populate(
      "subscribedplaylists"
    );
    return res.status(200).json({
      success: true,
      user: coursesbyuser,
    });
  } catch (e) {
    console.log(e);
    return res.json({
      success: false,
      error: e,
    });
  }
};

exports.deleteCourseById = async (req, res) => {
  try {
    const { playlistID } = req.params;
    const uid=req.userData.id;
    let existingCourse = await Course.findOne({
      playlistID: playlistID,
    });
    let user=await User.findOne({_id:uid});

    //if course not in data base then return
    if (!existingCourse) {
      return res.status(200).json({
        success: false,
        msg: "Course does not exist u need to add it first",
      });
    }
    const courseId = existingCourse._id;
    //if ref present in user with that course
    if (user.subscribedplaylists.includes(courseId)) {
      const index = user.subscribedplaylists.indexOf(courseId);
      if (index !== -1) {
        user.subscribedCourses.splice(index, 1);
        await user.save();
      
      return res.status(200).json({
        success: true,
        msg: "course is removed from your  courses ",
      });
    }
  }
  else{
    return res.status(200).json({
      success: false,
      msg: "Course does not exist u need to add it first",
    });
  }
  } catch (error) {
    console.error("Error:", error);
    return res.json({
      success: false,
      msg: "reload and Try again  ",
    });
  }
};
