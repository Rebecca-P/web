const fetch = require('node-fetch');

function submitLogin(login_address, login_password)
{
  const toSend = {
    address: login_address,
    password: login_password
  };

  toSend.address = 'alooooors'

  console.log(toSend);

  fetch('http://127.0.0.1:3001/user', {  
      method: 'POST',
      mode: 'cors',  
      headers: {  
        'Content-Type': 'application/json'
      },  
      body: JSON.stringify(toSend)
  })
  .then(function (response) {   
    console.log(response);
    return response.json()
  })  
  .then(function (data){
    console.log('Request success: ', data); 
    return data;
  })
  .catch(function (error) {  
    console.log('Request failure: ', error);  
    return error;
  });
}

module.exports = submitLogin;