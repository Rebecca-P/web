const mongoose = require("mongoose");
const Account = require("./account");
const Game = require("./game");
const Friend = require("./friend");
const Profile = require("./profile");

const userSchema = new mongoose.Schema({ 
    profile: Profile.schema,

    account: Account.schema,

    games: [Game.schema],

    friends: [Friend.schema]
});

const User = mongoose.model("User", userSchema);
module.exports = User;