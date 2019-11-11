
import React, { Component  } from 'react'
import { Button , Icon , Form , Divider } from 'semantic-ui-react'
import './App.css';
import NewGame from './Component/NewGame'
import ContinuGame from './Component/ContinuGame'
import StartScreen from './Component/StartScreen'
import Startword from './Component/Startword'

const imageUser = require('./Component/imageUser')


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
    this.handleSubmitNew = this.handleSubmitNew.bind(this);
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
      console.log(data);
      if(typeof data !== 'string') 
      {
        test = data;      
        connect=true;
      }else alert(data);
      //si l'utilisateur n'exista pas dans la db, data === string à afficher à l'utilisateur!
    })
      .catch(function (error) {  
        alert(error);
    });

  
  }
  async submitCreateUser(username, acc_address, acc_password, acc_urlimage)
{   
    const toSend = {
        userName: username,
        address: acc_address,
        password: acc_password,
        urlImage: acc_urlimage,
    };

    console.log(toSend);

    fetch('http://127.0.0.1:3001/saveUser', {  
    method: 'POST',
    mode: 'cors',  
    headers: {  
        'Content-Type': 'application/json'
    },  
    body: JSON.stringify(toSend)
    })
    .then(function (info){
        console.log('Request success: ', info); 
    })
    .catch(function (error) {  
        console.log('Request failure: ', error);
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

  async handleSubmitNew(event) {
    
    let image_=imageUser[randomNumber(45)];
    await this.submitCreateUser(this.state.user, this.state.email, this.state.psw,image_);
    alert("Merci d'avoir créer un compte! \nVous pouvez maintenant vous connecter.");
    this.setState({isNew : true})
      
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
         <StartScreen isNew={isNew} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleSubmitNew={this.handleSubmitNew}></StartScreen>
         <Divider/>
         <Startword isNew={isNew}></Startword>
        {button}
        
      </div>
    );
  }
}

function randomNumber(max) {
  return Math.floor(Math.random() * (max )) ;
}

export default LogIn;
