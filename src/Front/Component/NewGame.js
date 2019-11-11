import React, { Component } from 'react'
import { Button , Icon } from 'semantic-ui-react'

export default function NewGame(props)
{
  return(
    
    <Button color='yellow' icon labelPosition='right' onClick={props.onClick} className="next">
          Sign Up
          <Icon name='plus circle right'></Icon>
    </Button>
  );
}
