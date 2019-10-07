const mongoose = require("mongoose");

const friendSchema = new mongoose.Schema({ 
    userName: String, 
    urlImage: String
});
const Friend = mongoose.model("Friend", friendSchema);
module.exports = Friend;
