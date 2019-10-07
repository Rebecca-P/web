import React, { Component } from 'react'
import { Button , Icon } from 'semantic-ui-react'
import './App.css';
import LogIn from './LogIn'

import Profil from './Profil'

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
      <div id={toggleBack}>    
        {button}  
        <LogIn/> 
        
      </div>
    );
  }
  
}

export default App;
