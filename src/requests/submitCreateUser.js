const fetch = require('node-fetch');

function submitCreateUser(username, acc_address, acc_password, acc_urlimage)
{   
    const toSend = {
        userName: username,
        address: acc_address,
        password: acc_password,
        urlImage: acc_urlimage,
    };

    console.log(toSend);

    fetch('http://127.0.0.1:3001/saveUser', {  
    method: 'POST',
    mode: 'cors',  
    headers: {  
        'Content-Type': 'application/json'
    },  
    body: JSON.stringify(toSend)
    })
    .then(function (info){
        console.log('Request success: ', info); 
    })
    .catch(function (error) {  
        console.log('Request failure: ', error);
    });
    
}

module.exports = submitCreateUser;