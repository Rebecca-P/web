import React, { Component } from 'react'
import { Button , Icon , Form } from 'semantic-ui-react'

export default function ShowLogIn(props)
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
