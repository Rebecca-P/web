const fetch = require('node-fetch');

function updateUserGames(updatedGames)
{
  const toSend = {
    games: updatedGames
  };

  console.log(toSend);

  fetch('http://127.0.0.1:3001/updateUser', {  
      method: 'PUT',
      mode: 'cors',  
      headers: {  
        'Content-Type': 'application/json'
      },  
      body: JSON.stringify(toSend)
  })
  .then(function (){
    console.log('Games updated successfully');
  })
  .catch(function (error) {  
    console.log('Request failure: ', error);  
    return error;
  });
}

module.exports = updateUserGames;