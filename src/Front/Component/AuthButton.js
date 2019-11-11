import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
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
    
      <Button color='yellow'
      onClick={ () => {props.deco();
        history.push("/")}}
      >
        Log out
      </Button>
    
  );
}