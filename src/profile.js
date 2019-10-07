const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({ 
    userName: String, 
    urlImage: String, 
    playTime: String,
    level: Number,
    XP: Number
});

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
