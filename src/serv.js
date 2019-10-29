const express = require("express");
const app = express();
const cors = require('cors')
const mongoose = require("mongoose");
const Account = require("./models/account");
const User = require("./models/user");

const generateDB = require("./dbGenerator");
const authentication = require("./services/authenticateUser");

const getUser = require("./services/getUser");
const saveUser = require("./services/saveUser");
const deleteUser = require("./services/deleteUser");

app.use(cors());
app.use(express.json()); // for parsing application/json

// Connecting to the database
mongoose.connect(
  "mongodb://localhost:27017/DB_Test",
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

//Uncomment if you want to generate a new (test) database
//generateDB();


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

  //We don't need to check if body.address or body.password are empty 
  //because this is done in the front part
  accountToCreate.address = req.body.address;
  accountToCreate.password = req.body.password;

  userToCreate.account = accountToCreate;

  saveUser(userToCreate)
    .then( function(saveQueryResponse) {
      res
        .status(saveQueryResponse.statusCode)
        .send(saveQueryResponse.msg);
    });
});

app.delete("/deleteUser", function(req, res, next){
  deleteUser(req.body.userId);
});

app.listen(3001, () => {
    console.log("Server is running in port: 3001");
  });