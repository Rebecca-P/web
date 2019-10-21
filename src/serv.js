const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Account = require("./models/account")

const generateDB = require("./dbGenerator")
const authentication = require("./services/authenticateUser")

const getUser = require("./services/getUser")

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


app.post("/user", async function(req, res) {
  const tmp_account = new Account()
  tmp_account.address = req.body.address;
  tmp_account.password = req.body.password;

  /*if (!(tmp_account.address && tmp_account.password)) {
    res
      .status(400)
      .send({ msg: "You should specify the mail and the password of the user to get" });
  } 
  else {
    const userQueryResponse = await getUser(tmp_account);
    res
      .status(userQueryResponse.statusCode)
      .send({ msg: "OK" });
    authentication(userQueryResponse.user, tmp_account);
  }*/
});


app.listen(3000, () => {
    console.log("Server is running in port: 3000");
  });