const jwt = require("jsonwebtoken");
const User = require("../model/user");
const axios = require("axios");

//linked to /auth/google-signin
exports.googleLogin = async (req, res) => {
  if (req.body.googleAccessToken) {
    try {
      const { googleAccessToken } = req.body;

      const response = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${googleAccessToken}`,
          },
        }
      );

      const data = response.data;
      const firstName = data.given_name;
      const lastName = data.family_name;
      const email = data.email;
      const picture = data.picture;
      // const id = response.data.sub;
      let existingUser = await User.findOne({ email });

      if (!existingUser) {
        existingUser = await User.createNewUser({
          firstName,
          lastName,
          email,
          profilePicture: picture,
        });
      }

      const token = jwt.sign(
        {
          email: existingUser.email,
          id: existingUser._id,
          picture: existingUser.profilePicture,
        },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
      );

      // Setting Up cookies
      const options = {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      return res.status(200).cookie("token", token, options).json({
        success: true,
        token,
        user: existingUser,
      });
    } catch (e) {
      console.log("error at controller google-sigin", e);
      return res.status(400).json({
        success: false,
        error: e,
      });
    }
  }
};

//linked to /auth/login
exports.logout = (req, res) => {
  res.clearCookie("token").send("Done");
};
