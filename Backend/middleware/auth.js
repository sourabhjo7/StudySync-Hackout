const jwt = require('jsonwebtoken');

const User = require("../model/user");

//Checking if the jwt token is valid or not
const valToken = async (req, res, next) => {
  try {
    // looking for token in the header & cookies
    let authHeaderVal = req.cookies.token || req.headers.authorization;

    if (!authHeaderVal) {//condition is token is not found in either cookie or header
      return res.status(404).send("token not found");
    }

    //If the token is comming from herder, it will contain a Bearer in the starting
    const token = authHeaderVal.replace("Bearer ", "");

    const data = await jwt.verify(token, process.env.SECRET_KEY); //verifing token with the secret key from the env file
    req.userData = data;//Passing the user data of in the session
    next();//if get auth, passing to the controller

  } catch (e) {
    //if getting a error anywhere passing this error.
    return res.status(401).json({
      msg: "Auth failed not verified user",
      err: e
    });
  }

}

module.exports = {
  valToken,
}
