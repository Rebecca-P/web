const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({ 
    userName: String, 
    urlImage: String, 
    playTime: Number,
    level: Number,
    XP: Number
});

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
