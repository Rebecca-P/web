import React, { Component } from 'react'
import { Responsive  , Statistic } from 'semantic-ui-react'

export default function StatUser(props) {
  return(
    <div>
      <Responsive minWidth={830}>
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
      </Responsive>
      <Responsive maxWidth={829}>
        <Statistic.Group horizontal >
          <Statistic > 
            <Statistic.Value>{props.numberGame}</Statistic.Value>
            <Statistic.Label>Jeux</Statistic.Label>
          </Statistic>
          <Statistic >
            <Statistic.Value>{props.hourAll}</Statistic.Value>
            <Statistic.Label>Heures total passées à jouer</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </Responsive>
    </div>
    
  );
}