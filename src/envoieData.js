const fetch = require('node-fetch');

function submitLogin(login_address, login_password)
{
  const toSend = {
    address: login_address,
    password: login_password
  }
  console.log(toSend)
  fetch('http://127.0.0.1:3001/user', {  
      method: 'POST',
      mode: 'cors',  
      headers: {  
        'Content-Type': 'application/json'
      },  
      body: JSON.stringify(toSend)
  })
  .then(function (response) {   
    return response.json()
  })  
  .then(function (data){
    console.log('Request success: ', data); 
  })
  .catch(function (error) {  
    console.log('Request failure: ', error);  
  });
}

module.exports = submitLogin;