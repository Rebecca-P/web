const User = require("../models/user");

function deleteUser(userId) {
  return new Promise(resolve => {
    User.findById(userId, (err, foundedUser) => {
      if (err) {
        resolve({
          statusCode: 500,
          msg: "An internal error occurred while processing the request"
        });
      } else if (!foundedUser) {
        resolve({
          statusCode: 200,
          msg: "No user is associated to the indicated id"
        });
      } else {
        User.findOneAndDelete({ _id: userId }, err => {
          if (err) {
            resolve({
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
