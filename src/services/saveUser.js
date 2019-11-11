const User = require("../models/user");

function saveUser(userToSave) {
  const newUser = new User(userToSave);
  return new Promise((resolve, reject) => {
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
  });
}

module.exports = saveUser;
