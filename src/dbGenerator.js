//Profil random
const imageUser = require('./Front/Component/imageUser')
const userNameUser = require('./Front/Component/userNameUser')

//
const saveUser = require("./services/saveUser")
const User = require("./models/user")
const Account = require("./models/account")
const Game = require("./models/game")
const Friend = require("./models/friend")
const Profile = require("./models/profile")



function randomNumber(max) {
    
    return Math.floor(Math.random() * (max )) ;
  }
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
        var temp_idex_name = randomNumber(70);
        var temp_index_pic = randomNumber(45);
        var t_userName = userNameUser[temp_idex_name];
        temp_Profile.urlImage = imageUser[temp_index_pic];
        temp_Profile.userName = t_userName;
        temp_Profile.playTime= "1100 h"
        temp_Profile.level = 25;
        temp_Profile.XP = 80;

        
        var temp_Friend = new Friend();
        temp_idex_name = randomNumber(70);
        temp_index_pic = randomNumber(45);
        temp_Friend.userName = userNameUser[temp_idex_name];
        temp_Friend.urlImage = imageUser[temp_index_pic];

        var temp_Friend2 = new Friend();
        temp_idex_name = randomNumber(70);
        temp_index_pic = randomNumber(45);
        temp_Friend2.userName = userNameUser[temp_idex_name];
        temp_Friend2.urlImage = imageUser[temp_index_pic];

        var temp_Friend3 = new Friend();
        temp_idex_name = randomNumber(70);
        temp_index_pic = randomNumber(45);
        temp_Friend3.userName = userNameUser[temp_idex_name];
        temp_Friend3.urlImage = imageUser[temp_index_pic];

        var temp_Friend4 = new Friend();
        temp_idex_name = randomNumber(70);
        temp_index_pic = randomNumber(45);
        temp_Friend4.userName = userNameUser[temp_idex_name];
        temp_Friend4.urlImage = imageUser[temp_index_pic];


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