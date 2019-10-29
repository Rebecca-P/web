const User = require("../models/user");

function deleteUser(userId) {
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
        User.findOneAndDelete({ _id: userId }, err => {
          if (err) {
            reject({
              statusCode: 500,
              msg: "An internal error occurred while processing the request"
            });
          } else {
            resolve({
              statusCode: 200,
              msg: "The user is deleted successfully"
            });
          }
        });
      }
    });
  });
}

module.exports = deleteUser;
