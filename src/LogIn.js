/*
recupere les donnée donnée par user , le mettre dans une variable, envoie une requet http avec dans le body @ et mdp
afficher à partir de l'objet user et non à partir des variables des class
y
*/ 
import React, { Component  } from 'react'
import { Button , Icon , Form , Divider } from 'semantic-ui-react'
import './App.css';



class LogIn extends Component {
  constructor(props) {
    super(props)
    this.handleNew = this.handleNew.bind(this);
    this.handleAlready = this.handleAlready.bind(this);
    this.state = {
      isNew: true,
      //
      userName:'',
      mdp:'',
      mail:''
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
                
        
         <StartScreen isNew={isNew}></StartScreen>
         <Divider/>
         <Startword isNew={isNew}></Startword>
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
        <Form>
          <Form.Input type="text"     
            size="20" 
            placeholder="Enter Email" 
            name="email"
            icon={<Icon name='at' circular inverted link></Icon>} 
            required>
          </Form.Input>
          <Form.Input type="password" 
            size="20" 
            placeholder="Enter Password" 
            name="psw"
            icon={<Icon name='key' circular inverted link></Icon>} 
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
        <Form action="GET">           
          <Form.Input type="text"   
            size="20" 
            placeholder="Enter Username" 
            name="user"
            icon={<Icon name='user' circular inverted link></Icon>} 
            required>
          </Form.Input>           
                
          <Form.Input type="password"  
            size="20" 
            placeholder="Enter Password" 
            name="psw"
            icon={<Icon name='key' circular inverted link></Icon>} 
            required>
          </Form.Input>

          <Form.Input type="email"    
            size="20" 
            placeholder="Enter Email" 
            name="email"
            icon={<Icon name='at' circular inverted link></Icon>} 
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
    return <ShowSignIn/>;
  }
  return <ShowLogIn/>;
}

function Startword(props)
{
  if(props.isNew){
    return <p>New?</p>;
  }
  return <p>Already with us ?</p>;
}


export default LogIn;
