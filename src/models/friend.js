const mongoose = require("mongoose");

const friendSchema = new mongoose.Schema({ 
    _id: mongoose.Schema.Types.ObjectId,
    userName: String, 
    urlImage: String
});
const Friend = mongoose.model("Friend", friendSchema);
module.exports = Friend;
