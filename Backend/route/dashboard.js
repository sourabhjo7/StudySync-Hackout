const express = require("express");
const router = express.Router();

//Requring Controllers
const controller = require("../controller/dashboard");

//importing custom middlewares
const { valToken} = require("../middleware/auth");

//home route to validate user based on jwt
router.get("/", valToken, controller.home);

// to add course to specific user
router.post("/add-course",valToken,controller.AddCourse);
router.get("/subscribed-courses",valToken,controller.getCoursesByUser);

module.exports = router;
