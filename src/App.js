import React, { Component } from 'react'
import { Button , Icon } from 'semantic-ui-react'
import './App.css';
import LogIn from './LogIn'
import Profil from './Profil'
import TestLog from './TestLog'
import User_data from './User_data';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
var user= new User_data();

class App extends Component {
  
  constructor(props) {
    super(props)
    this.handlebackground = this.handlebackground.bind(this);
    
    this.state = {
      background: true,
      
      
    };
  }

  handlebackground()
  {    
    this.setState({
      background:!this.state.background 
    });
    
    
  }
  
  
  render(){
    const toggleBack = this.state.background ? "Body_1" : "Body_2";
    let button = <Button id="change" icon='world' onClick={this.handlebackground}/>;

    return (
      <Router>
        <div id={toggleBack}>    
          {button} 

          <Switch>
            <Route exact path="/">
              <LogIn/> 
            </Route>
            <Route exact path="/profil">
              <LogIn/> 
            </Route>
          </Switch>
          
          
        </div>
      </Router>
      
    );
  }
  
}

export default App;
