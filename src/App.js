import React, { Component } from 'react'
import { Button  } from 'semantic-ui-react'
import './Front/App.css';
import LogIn from './Front/LogIn'
import Profil from './Front/Profil'
import User_data from './Front/User_data';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,

} from "react-router-dom";
import { thisExpression } from '@babel/types';
/**
 * Ajouter un bouton pour supprimer le compte
 */

//Global

class App extends Component {
  
  constructor(props) {
    super(props)
    this.handlebackground = this.handlebackground.bind(this);
    this.handleLog = this.handleLog.bind(this);
    this.privateRouteToProfil = this.privateRouteToProfil.bind(this);
    this.handleUser = this.handleUser.bind(this);
    this.state = {
      background: true,
      identifer: false ,
      user : null,
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

  handleUser(evt){//ca marche
      //user = evt;
      this.setState({
        user: evt
      }, () => {
        //console.log(this.state.user);
      });
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
    let button = <Button id="change" icon='arrows alternate horizontal' onClick={this.handlebackground}/>;
    return (
      
      <Router>
        
        <div id={toggleBack}>    
          {button}
          <Switch>
            <Route exact path="/">
              <this.privateRouteToProfil>
                <LogIn func_co={this.handleLog} func_charge={this.handleUser}/> 
              </this.privateRouteToProfil>
            </Route> 
            <Route exact path="/profil">
                <Profil func_co={this.handleLog} user={this.state.user}/>
            </Route>
          </Switch>
          
          
        </div>

        {/* <div id={toggleBack}>
          {button}
            <Profil/>
        </div> */}

      </Router>
      
    );
  }
  
}



export default App;
