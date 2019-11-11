const User = require("../models/user");

function getAllUsers() {
  return new Promise(resolve => {
    User.find(function(err, users) {
      if (err) {
        resolve({
          statusCode: 500,
          msg: "An internal error occurred while processing the request"
        });
      } else {
        resolve({
          statusCode: 200,
          users
        });
      }
    });
  });
}

// fetch('http://127.0.0.1:3001/getAllUsers', {  
//       method: 'GET',
//       mode: 'cors',  
//       headers: {  
//         'Content-Type': 'application/json'
//       },
//   })
//   .then(function (result){
//     return result.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(function (error) {  
//     console.log('Request failure: ', error);  
//     return error;
//   });



module.exports = getAllUsers;