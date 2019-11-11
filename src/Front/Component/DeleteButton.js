import React, { Component } from 'react'
import { Button,Confirm } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

const submitDeleteUser = require("../../requests/submitDeleteUser");

export default function AuthButton(props) {
  let history = useHistory();
  const userId = props.userId;
  
  return (
    
      <Button color='red'
        onClick={ () => {
          props.deco();
          history.push("/");
          submitDeleteUser(userId);
        }}
      >
        Delete Account
      </Button>
   
  );
}