
import React, { Component  } from 'react'
import { Button , Icon , Form , Divider } from 'semantic-ui-react'
import './App.css';
import NewGame from './Component/NewGame'
import ContinuGame from './Component/ContinuGame'
import StartScreen from './Component/StartScreen'
import Startword from './Component/Startword'

const fetch = require('node-fetch');
//global
//
  let test = null;
  let connect = false;

class LogIn extends Component {
  
  constructor(props) {
    super(props)
    this.handleNew = this.handleNew.bind(this);
    this.handleAlready = this.handleAlready.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
    this.state = {
      isNew: true,
      //
      user:'',
      email:'',
      psw: '',
      //
    }
      
  }

  handleAlready()
  {    
    this.setState({
      isNew: false,
    });
    
    
  }
  handleNew()
  {    
    this.setState({
      isNew: true,
      isVisibleNew:false,
      isVisibleAlready:true,
    });
    
    
  }
  
  handleChange(event) {
    this.setState(
      { [event.target.name] : event.target.value}
      );
  }

  async submitLogin(login_address, login_password)
  {
    const toSend = {
      address: login_address,
      password: login_password
    }
    await fetch('http://127.0.0.1:3001/user', {  
      method: 'POST',
      mode: 'cors',  
      headers: {  
        'Content-Type': 'application/json'
      },  
      body: JSON.stringify(toSend)
    })
    .then(function (response) {   
      return response.json()
    }) 
    .then( function (data){
      test = data;      
      connect=true;
    })
      .catch(function (error) {  
        alert(error);
    });

  
  }

  async handleSubmit(event) {
    await this.submitLogin(this.state.email, this.state.psw);
    
    if(connect)
    {
      this.props.func_co(true)
      this.props.func_charge(test)
    }
      
    event.preventDefault();
  }

  render(){
    const isNew = this.state.isNew;
    let button;
    if(isNew){
      button = <NewGame onClick={this.handleAlready}/>;
    }else{
      button = <ContinuGame onClick={this.handleNew}/>;
    }

    return (      
      <div className="CenterBox">
         <StartScreen isNew={isNew} handleChange={this.handleChange} handleSubmit={this.handleSubmit}></StartScreen>
         <Divider/>
         <Startword isNew={isNew} handleChange={this.handleChange} handleSubmit={this.handleSubmit}></Startword>
        {button}
        
      </div>
    );
  }
}

export default LogIn;
