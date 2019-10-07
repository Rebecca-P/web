const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({ 
    name: String, 
    urlImage: String, 
    playTime: String,  
    tags: [ String ]
});
const Game = mongoose.model("Game", gameSchema);
module.exports = Game;
