import React, { Component } from 'react'
import { Button , Icon , Statistic , Image , Grid , Segment , Header  , List , Progress , Card , Menu , Modal} from 'semantic-ui-react'

export default function Level(props)
{
  return(
    <Statistic color='green'> 
        <Statistic.Label>Niveau</Statistic.Label>
        <Statistic.Value>{props.level}</Statistic.Value>        
      </Statistic>
  );
}