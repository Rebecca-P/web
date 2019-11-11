const fetch = require('node-fetch');

function submitLogin(userId)
{
  const toSend = {
    userId: userId
  };

  toSend.address = 'alooooors'

  console.log(toSend);

  fetch('http://127.0.0.1:3001/deleteUser', {  
      method: 'DELETE',
      mode: 'cors',  
      headers: {  
        'Content-Type': 'application/json'
      },  
      body: JSON.stringify(toSend)
  })
  .then(function (response) {   
    console.log(response);
  })  
  .catch(function (error) {  
    console.log('Request failure: ', error); 
  });
}

module.exports = submitLogin;