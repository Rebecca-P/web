import React, { Component } from 'react'
import { Button , Icon } from 'semantic-ui-react'
import './Front/App.css';
import LogIn from './Front/LogIn'
import Profil from './Front/Profil'
import TestLog from './Front/TestLog'
import User_data from './Front/User_data';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { thisExpression } from '@babel/types';

var user= new User_data();


class App extends Component {
  
  constructor(props) {
    super(props)
    this.handlebackground = this.handlebackground.bind(this);
    this.handleLog = this.handleLog.bind(this);
    this.privateRouteToProfil = this.privateRouteToProfil.bind(this);
    this.state = {
      background: true,
      identifer: false ,
 
    };
  }

  handlebackground()
  {    
    this.setState({
      background:!this.state.background 
    });
    
    
  }

 
  
  handleLog(evt){
    this.setState({identifer : evt}); 
    
  } 

  privateRouteToProfil({ children, ...rest }) {
    
    return (
      <Route
        {...rest}
        render={({ location }) =>
          this.state.identifer ? (
            <Redirect
              to={{
                pathname: "/profil",
                state: { from: location }
              }}
            />
          ) : (
             children
          )
        }
      />
    );
  }
 

  render(){
    const toggleBack = this.state.background ? "Body_1" : "Body_2";
    let button = <Button id="change" icon='world' onClick={this.handlebackground}/>;
    
    return (
      <Router>
        
        <div id={toggleBack}>    
          {button}
          {console.log(this.state.identifer)}
          <Switch>
            <Route exact path="/">
              <this.privateRouteToProfil>
                <LogIn func_co={this.handleLog}/> 
                
              </this.privateRouteToProfil>
            </Route> 
            <Route exact path="/profil">
                <Profil func_co={this.handleLog}/>
                
            </Route>
          </Switch>
          
          
        </div>
      </Router>
      
    );
  }
  
}



export default App;
