const express = require("express");
const app = express();
const cors = require('cors')
const mongoose = require("mongoose");
const Account = require("./models/account")

const generateDB = require("./dbGenerator")
const authentication = require("./services/authenticateUser")

const getUser = require("./services/getUser")

app.use(cors())
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


app.post("/user", async function(req, res, next) {
  const tmp_account = new Account()
  tmp_account.address = req.body.address;
  tmp_account.password = req.body.password;
  if (!(tmp_account.address && tmp_account.password)) {
    res
      .status(400)
      .send({ msg: "You should specify the mail and the password of the user to get" });
  } 
  else {
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
        console.log(errormsg)
        if(errormsg === 1)
        {
          res
            .status(403)
            .send({msg: "The password is not correct, please retry."})
        }
        else if(errormsg === 0)
        {
          res
            .status(403)
            .send({msg: "This e-mail doesn't exists in our database. Please try again or sign up!"})
        }
      });

    /*res
      .status(userQueryResponse.statusCode)
      .setHeader('Content-Type', 'application/json')
      .send({ msg: "Authentication successful" })
      .send(JSON.stringify(userQueryResponse.user));
    res
      .status(userQueryResponse.statusCode)
      .send("The password is not correct");
    res
      .status(userQueryResponse.statusCode)
      .send("This e-mail doesn't exists. Please try again or sign up!");*/
  }
});


app.listen(3001, () => {
    console.log("Server is running in port: 3001");
  });