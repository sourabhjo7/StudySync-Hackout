const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    profilePicture: { type: String, required: false },
});


// static function custom based data creation 
userSchema.statics.createNewUser = function(userDel) {
    const {
        firstName,
        lastName,
        email,
        profilePicture,
    } = userDel;

    return this.create({
        firstName,
        lastName,
        email,
        profilePicture,
    }).then((data) => {
        return data;
    });
};

module.exports = mongoose.model("User", userSchema);