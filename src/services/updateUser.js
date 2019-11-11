const User = require("../models/user");

function updateUser(userId, updates) {
  return new Promise((resolve, reject) => {
    User.findById(userId, (err, foundedUser) => {
      if (err) {
        reject({
          statusCode: 500,
          msg: "An internal error occurred while processing the request"
        });
      } else if (!foundedUser) {
        reject({
          statusCode: 200,
          msg: "No user is associated to the indicated id"
        });
      } else {
        console.log("----------------------------------------------------------");
        console.log(updates);
        User.findOneAndUpdate({ _id: userId }, updates, err => {
          if (err) {
            reject({
              statusCode: 500,
              msg: "An internal error occurred while processing the request"
            });
          } else {
            resolve({
              statusCode: 200,
              msg: "The user is updated successfully"
            });
          }
        });
      }
    });
  });
}

module.exports = updateUser;
