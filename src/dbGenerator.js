const saveUser = require("./services/saveUser")
const User = require("./models/user")
const Account = require("./models/account")
const Game = require("./models/game")
const Friend = require("./models/friend")
const Profile = require("./models/profile")

function nextChar(c, i) {
    return String.fromCharCode(c.charCodeAt(0) + i);
}

function changeThreeFirstLetters(c, i)
{
    var j = 0;
    var ch = nextChar('a', i);
    var temp = "";
    temp = c.substring(3);
    c="";
    while(j < 3)
    {
        c+=ch;
        j++;
    }
    c+=temp;
    return c;
}

async function generateDB ()
{
    for(var i=0; i<5; i++)
    {
        var temp_Account = new Account();
        var t_address = "aaa@hotmail.fr";
        t_address = await changeThreeFirstLetters(t_address, i);
        temp_Account.address = t_address;

        var t_password = "aaa";
        t_password = await changeThreeFirstLetters(t_password, i);
        temp_Account.password = t_password;
        
        var temp_Game = new Game();
        temp_Game.name = "The Elder Scrolls V: Skyrim";
        temp_Game.urlImage = "https://upload.wikimedia.org/wikipedia/fr/0/0d/The_Elder_Scrolls_5_Skyrim_Logo.png";
        temp_Game.playTime = "600 h"
        temp_Game.tags.push('Action', 'RPG', 'Monde Ouvert');

        var temp_Game2 = new Game();
        temp_Game2.name = "The Legend of Zelda: Breath of the Wild";
        temp_Game2.urlImage = "https://upload.wikimedia.org/wikipedia/fr/thumb/9/90/The_Legend_of_Zelda_Breath_of_the_Wild_Logo.png/560px-The_Legend_of_Zelda_Breath_of_the_Wild_Logo.png";
        temp_Game2.playTime = "250 h"
        temp_Game2.tags.push('Action', 'Aventure');

        var temp_Game3 = new Game();
        temp_Game3.name = "Devil May Cry 5";
        temp_Game3.urlImage = "https://upload.wikimedia.org/wikipedia/fr/thumb/e/e3/Devil_May_Cry_5_Logo.svg/langfr-560px-Devil_May_Cry_5_Logo.svg.png";
        temp_Game3.playTime = "250 h"
        temp_Game3.tags.push('Beat them All');

        var temp_Profile = new Profile();
        var t_userName = "User ";
        var tmp = i+1;
        t_userName += tmp.toString();
        temp_Profile.userName = t_userName;
        temp_Profile.urlImage = "image0.png";
        temp_Profile.playTime= "1100 h"
        temp_Profile.level = 25;
        temp_Profile.XP = 80;

        var temp_Friend = new Friend();
        temp_Friend.userName = "Friend 1";
        temp_Friend.urlImage = "image1.png";

        var temp_Friend2 = new Friend();
        temp_Friend2.userName = "Friend 2";
        temp_Friend2.urlImage = "image2.png";

        var temp_Friend3 = new Friend();
        temp_Friend3.userName = "Friend 3";
        temp_Friend3.urlImage = "image3.png";

        var temp_Friend4 = new Friend();
        temp_Friend4.userName = "Friend 4";
        temp_Friend4.urlImage = "image4.png";


        var temp_User = new User;
        temp_User.profile = temp_Profile;
        temp_User.account = temp_Account;
        temp_User.games.push(temp_Game, temp_Game2, temp_Game3);
        temp_User.friends.push(temp_Friend, temp_Friend2, temp_Friend3, temp_Friend4);
        await saveUser(temp_User);
    }
    console.log("Database generated successfully!");
};

module.exports = generateDB;