const getUser = require("./getUser");

async function authentication(userReceived, enteredAccount)
{
    if(!userReceived)
    {
        console.log("This e-mail doesn't exists. Please try again or sign up!");
    }
    else if(userReceived.account.password != enteredAccount.password)
    {
        console.log("The password is not correct");
    }
    else{
        console.log("Authenticated");
    }
    
}

module.exports = authentication;