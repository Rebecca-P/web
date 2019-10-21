/*
recupere les donnée donnée par user , le mettre dans une variable, envoie une requet http avec dans le body @ et mdp
afficher à partir de l'objet user et non à partir des variables des class

*/ 
import React, { Component  } from 'react'
import { Button , Icon , Form  } from 'semantic-ui-react'
import './App.css';



class TestLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      psw: '',
      
  };

    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(event) {
    this.setState(
      { [event.target.name] : event.target.value}
      );
  }

  

  render(){
    

    return (      
    <div className="CenterBox">
     <p>
         aaa
         <br/>
        {this.state.email}
        <br/>
        {this.state.psw}
    </p>           
    <Form>
          <Form.Input type="text"     
            size="20" 
            placeholder="Enter Email" 
            name="email"
            icon={<Icon name='at' circular inverted link></Icon>}
            onChange={this.handleChange} 
            required>
          </Form.Input>
          <Form.Input type="password" 
            size="20" 
            placeholder="Enter Password" 
            name="psw"
            icon={<Icon name='key' circular inverted link></Icon>}

            onChange={this.handleChange} 

            required>
          </Form.Input>
          <Button type='submit' color='red' icon labelPosition='right'>
            Start!
          <Icon name='chevron circle right'></Icon>
          </Button>
        </Form>
        
      </div>
    );
  }
}




export default TestLog;
