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

export default function AuthButton(props) {
  let history = useHistory();
  
  return (
    
      <Button color='red'
        onClick={ () => {props.deco();
          history.push("/")}}
      >
        Delete Account
      </Button>
   
  );
}