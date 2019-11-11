const User = require("../models/user");
const getUser = require("./getUser");

function saveUser(userToSave) {
  const newUser = new User(userToSave);
  return new Promise((resolve, reject) => {
    getUser(newUser.account)
    .then(function(foundedUser)
    {
      reject({
        statusCode: 500,
        msg: "This e-mail address already exists"
      })
    })
    .catch(function(errormsg)
    {
      if(errormsg.msg === "This e-mail address doesn't exists. Please try again or sigh in!")
      {
        newUser.save(function(err) {
          if (err) {
            reject({
              statusCode: 500,
              msg: "An internal error occurred while processing the request"
            });
          } else {
            resolve({
              statusCode: 200,
              msg: "The user was saved successfully"
            });
          }
        });
      }
      else{
        reject({
          statusCode: 5000,
          msg: errormsg.msg
        })
      }
    });
    
  });
}

module.exports = saveUser;
