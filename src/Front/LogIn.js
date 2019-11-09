/*
recupere les donnée donnée par user , le mettre dans une variable, envoie une requet http avec dans le body @ et mdp
afficher à partir de l'objet user et non à partir des variables des class

*/ 
import React, { Component  } from 'react'
import { Button , Icon , Form , Divider } from 'semantic-ui-react'
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const submitLogin = require("../requests/submitLogin");
const submitCreateUser = require('../requests/submitCreateUser');


class LogIn extends Component {
  constructor(props) {
    super(props)
    this.handleNew = this.handleNew.bind(this);
    this.handleAlready = this.handleAlready.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      isNew: true,
      //
      user:'',
      email:'',
      psw: '',

      // emaildefault:'user1@user.fr',
      // pswdefault:'1234',
    };
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
      isVisibleAlready:true
    });
    
    
  }
  
  handleChange(event) {
    this.setState(
      { [event.target.name] : event.target.value}
      );
  }

  handleSubmit(event) {
    //submitLogin(this.state.email, this.state.psw);
    event.preventDefault();

    submitCreateUser("abon", "abc@hotmail.fr", "abc");
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

function ShowLogIn(props)
{
  
  return(
    <div id="box_log">
      <h2>Welcome Player!</h2>
      <div className="form_log">
        <Form onSubmit={props.handleSubmit}>
          <Form.Input type="text"     
            size="20" 
            placeholder="Enter Email" 
            name="email"
            icon={<Icon name='at' circular inverted link></Icon>}

            onChange={props.handleChange} 

            required>
          </Form.Input>
          <Form.Input type="password" 
            size="20" 
            placeholder="Enter Password" 
            name="psw"
            icon={<Icon name='key' circular inverted link></Icon>}
 
            onChange={props.handleChange} 

            required>
          </Form.Input>
          <Button type='submit' color='red' icon labelPosition='right'>
            Start!
          <Icon name='chevron circle right'></Icon>
          </Button>
        </Form>
      </div> 
    </div>
  );
}


function NewGame(props)
{
  return(
    
    <Button color='yellow' icon labelPosition='right' onClick={props.onClick} className="next">
          Sign Up
          <Icon name='plus circle right'></Icon>
    </Button>
  );
}

function ContinuGame(props)
{
  return(
   
    <Button color='red' icon labelPosition='right' onClick={props.onClick} className="next">
          Sign In
          <Icon name='play circle right'></Icon>
    </Button>
  );
}

function ShowSignIn(props)
{
  return(
    
    <div id="box_sign">
      <h2>Welcome New Player!</h2>
      <div className="form_log">
        <Form onSubmit={props.handleSubmit}>           
          <Form.Input type="text"   
            size="20" 
            placeholder="Enter Username" 
            name="user"
            icon={<Icon name='user' circular inverted link></Icon>} 

            onChange={props.handleChange} 
            required>
          </Form.Input>           
                
          <Form.Input type="password"  
            size="20" 
            placeholder="Enter Password" 
            name="psw"
            icon={<Icon name='key' circular inverted link></Icon>} 

            onChange={props.handleChange} 
            required>
          </Form.Input>

          <Form.Input type="email"    
            size="20" 
            placeholder="Enter Email" 
            name="email"
            icon={<Icon name='at' circular inverted link></Icon>} 

            onChange={props.handleChange} 
            required>
          </Form.Input>

          <Button type='submit' color='red' icon labelPosition='right'>
            Finish my character!
            <Icon name='chevron circle right'></Icon>
          </Button>
        </Form>
      </div>
    </div>
    
  );
}

function StartScreen(props)
{
  if(!props.isNew){
    return <ShowSignIn handleChange={props.handleChange} handleSubmit={props.handleSubmit}/>;
  }
  return <ShowLogIn handleChange={props.handleChange} handleSubmit={props.handleSubmit}/>;
}

function Startword(props)
{
  if(props.isNew){
    return <p>New?</p>;
  }
  return <p>Already with us ?</p>;
}


export default LogIn;
