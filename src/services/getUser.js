const User = require("../models/user");
const Account = require("../models/account")

function getUser(user_Account) {
  return new Promise((resolve, reject) => {
    User.findOne({'account.address': user_Account.address}, function(err, user) {
      if (err) {
        reject({
          statusCode: 500,
          msg: "An internal error occurred while processing the request"
        });
      } else {
        resolve({
          statusCode: 200,
          user
        });
      }
    });
  });
}

module.exports = getUser;
