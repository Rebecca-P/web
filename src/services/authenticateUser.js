function authentication(userQueryResponse, enteredAccount)
{
    const user = userQueryResponse.user;
    return new Promise((resolve, reject) => {
        if(!user)
        {
            reject(
                {
                    msg: "This e-mail doesn't exists in our database. Please try again or sign up!",
                    statusCode: 403
                });
        } 
        else if(user.account.password !== enteredAccount.password)
        {
            reject({
                msg: "The password is not correct, please retry.",
                statusCode: 403
            });
        }
        else{
            resolve({
                statusCode: 200,
                user
            });
        }
      })
    
}

module.exports = authentication;