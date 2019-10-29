function authentication(userQueryResponse, enteredAccount)
{
    return new Promise((resolve, reject) => {
        if(!userQueryResponse.user)
        {
            reject(0);
        } 
        else if(userQueryResponse.user.account.password != enteredAccount.password)
        {
            reject(1);
        }
        else{
            resolve(userQueryResponse);
        }
      })
    
}

module.exports = authentication;