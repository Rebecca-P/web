import React, { Component } from 'react'
import { Responsive , Grid ,  Progress } from 'semantic-ui-react'
import PictureUser from './PictureUser'
import NameUser from './NameUser'
import Level from './Level'

export default function AllStat(props)
{
  return(
    <div>
      <Responsive minWidth={830}>
        <Grid centered>          
          <Grid.Row stretched columns={2}>
            <Grid.Column centered>
              <PictureUser pictureUser={props.pictureUser} ></PictureUser>
            </Grid.Column>
            <Grid.Column>
              <NameUser nameUser={props.nameUser}></NameUser>
              <Level level={props.level}></Level>
              <Progress percent={props.xp} indicating />
            </Grid.Column>
          </Grid.Row>        
        </Grid> 
      </Responsive>
      <Responsive maxWidth={829}>
      <Grid centered>          
          <Grid.Row stretched columns={1}>
            <Grid.Column>
              <PictureUser pictureUser={props.pictureUser} ></PictureUser>
              <NameUser nameUser={props.nameUser}></NameUser>
              <Level level={props.level}></Level>
              <Progress percent={props.xp} indicating />
            </Grid.Column>
          </Grid.Row>        
        </Grid> 
      </Responsive>
      
    </div>
    
  );
}