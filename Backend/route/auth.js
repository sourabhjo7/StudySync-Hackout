const express = require("express");
const router = express.Router(); //importing routers for the express package

//Requring Controllers
const controller = require("../controller/auth");

// route for google sign in Oauth workflow  /auth/google-signin
router.post("/google-signin", controller.googleLogin);

//route for loging out a user from the system
router.get("/logout", controller.logout);

module.exports = router;
