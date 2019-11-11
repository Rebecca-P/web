const User = require("../models/user");

function getUser(user_Account) {
  return new Promise((resolve, reject) => {
    User.findOne({'account.address': user_Account.address}, function(err, user) {
      if (err) {
        reject({
          statusCode: 500,
          msg: "An internal error occurred while processing the request"
        });
      } else {
        if(user != null)
        {
          resolve({
            statusCode: 200,
            msg: "User found",
            user
          });
        }
        else{
          reject({
            statusCode: 500,
            msg: "User not found"
          })
        }
      }
    });
  });
}

module.exports = getUser;
