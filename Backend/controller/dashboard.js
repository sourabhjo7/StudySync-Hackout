const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require("../model/user");

//linked to /
exports.home = (req, res) => {
    res.status(200).json({
        msg: "TOKEN present",
        data: req.userData,
    });
}

exports.AddCourse=(req,res)=>{
    console.log("this is add course route ");
    const userid=req.userData.id;
    console.log(req.userData,"---",userid);
    res.json({
        msg:"success"
    })
}

