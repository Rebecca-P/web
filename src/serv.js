const express = require("express");
const app = express();
const cors = require('cors')
const mongoose = require("mongoose");

const Account = require("./models/account");
const User = require("./models/user");
const Profile = require("./models/profile");

const generateDB = require("./dbGenerator");
const authentication = require("./services/authenticateUser");

const getUser = require("./services/getUser");
const saveUser = require("./services/saveUser");
const deleteUser = require("./services/deleteUser");
const updateUser = require("./services/updateUser");
const getAllUsers = require("./services/getAllUsers");

app.use(cors());
app.use(express.json()); // for parsing application/json

// Connecting to the database
mongoose.connect(
  "mongodb://localhost:27017/Web_Project",
  { useNewUrlParser: true },
  err => {
    if (err) {
      console.log(
        `Error while connecting to the MongoDB database: ${err.message}`
      );
    } else {
      console.log("Connected successfully to the MongoDB database");
    }
  }
);
mongoose.set('useFindAndModify', false);

//Uncomment if you want to generate a new (test) database
/*generateDB()
.catch(() =>{
  console.log("Database already exists!");
})

*/

app.post("/user", function(req, res, next) {
  const tmp_account = new Account()
  tmp_account.address = req.body.address;
  tmp_account.password = req.body.password;
  //We don't need to check if body.address or body.password are empty 
  //because this is done in the front part
  getUser(tmp_account)
    .then( function(userQueryResponse) {
      return authentication(userQueryResponse, tmp_account)
    })
    .then(function(userQueryResponse) {
      res
        .status(userQueryResponse.statusCode)
        .json(userQueryResponse.user);
    })
    .catch(function(errormsg) {
      res
          .status(errormsg.statusCode)
          .json(errormsg.msg)
    });
});

app.post("/saveUser", function(req, res, next) {
  let userToCreate = new User();
  let accountToCreate = new Account();
  let profileToCreate = new Profile();
  //We don't need to check if body.address or body.password are empty 
  //because this is done in the front part
  accountToCreate.address = req.body.address;
  accountToCreate.password = req.body.password;

  profileToCreate.userName = req.body.userName;
  profileToCreate.urlImage = req.body.urlImage;
  profileToCreate.playTime = 0;
  profileToCreate.level = 1;
  profileToCreate.XP = 0;

  userToCreate.account = accountToCreate;
  userToCreate.profile = profileToCreate;
  
  saveUser(userToCreate)
    .then( function(saveQueryResponse) {
      res
        .status(saveQueryResponse.statusCode)
        .send(saveQueryResponse.msg);
    })
    .catch( function(errormsg) {
      res
        .status(errormsg.statusCode)
        .send(errormsg.msg)
    });
});

app.delete("/deleteUser", function(req, res, next){
  deleteUser(req.body.userId)
    .then( function(deleteQueryResponse) {
      res
        .status(deleteQueryResponse.statusCode)
        .send(deleteQueryResponse.msg);
    })
    .catch( function(errormsg) {
      res
        .status(errormsg.statusCode)
        .send(errormsg.msg)
    });
});

app.put("/updateUser", function(req, res, next){
  console.log(req.body);
  const tmpReq = JSON.stringify(req.body);
  let updates = null;
  if(tmpReq.includes("games"))
  {
    console.log("games found");
    updates = {
      games: req.body.games
    }
  }
  else
  {
    console.log("Other");
  }
  updateUser(req.body.userId, updates)
    .then( function(updateQueryResponse) {
      res
        .status(updateQueryResponse.statusCode)
        .send(updateQueryResponse.msg);
    })
    .catch( function(errormsg) {
      res
        .status(errormsg.statusCode)
        .send(errormsg.msg)
    });
});

app.get("/getAllUsers", function(req, res, next){
  getAllUsers()
  .then( function(updateQueryResponse) {
    res
      .status(updateQueryResponse.statusCode)
      .json(updateQueryResponse.users);
  })
  .catch( function(errormsg) {
    res
      .status(errormsg.statusCode)
      .json(errormsg.msg)
  });
})

app.listen(3001, () => {
    console.log("Server is running in port: 3001");
  });