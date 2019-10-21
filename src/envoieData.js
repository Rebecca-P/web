const fetch = require('node-fetch');

fetch('http://127.0.0.1:3000/user', {  
    method: 'POST',  
    headers: {  
        'Content-type': 'application/json'
    },  
    body: JSON.stringify({
        address: "aaa@hotmail.fr",
        password: "aaa"
  })
})
.then(function (data) {  
  console.log('Request success: ', data);  
})  
.catch(function (error) {  
  console.log('Request failure: ', error);  
});