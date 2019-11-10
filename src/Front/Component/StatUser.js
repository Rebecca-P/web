import React, { Component } from 'react'
import { Button , Icon , Statistic , Image , Grid , Segment , Header  , List , Progress , Card , Menu , Modal} from 'semantic-ui-react'

export default function StatUser(props) {
  return(
    <Statistic.Group widths={2} >
      <Statistic > 
        <Statistic.Value>{props.numberGame}</Statistic.Value>
        <Statistic.Label>Jeux</Statistic.Label>
      </Statistic>
      <Statistic >
        <Statistic.Value>{props.hourAll}</Statistic.Value>
        <Statistic.Label>Heures total passées à jouer</Statistic.Label>
      </Statistic>
      
    </Statistic.Group>
  );
}