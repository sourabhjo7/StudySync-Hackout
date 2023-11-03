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
