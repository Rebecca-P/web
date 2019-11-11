import React, { Component } from 'react'
import { Button , Icon } from 'semantic-ui-react'

export default function ContinuGame(props)
{
  return(
   
    <Button color='red' icon labelPosition='right' onClick={props.onClick} className="next">
          Sign In
          <Icon name='play circle right'></Icon>
    </Button>
  );
}
