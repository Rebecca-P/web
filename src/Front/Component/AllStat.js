import React, { Component } from 'react'
import { Button , Icon , Statistic , Image , Grid , Segment , Header  , List , Progress , Card , Menu , Modal} from 'semantic-ui-react'
import PictureUser from './PictureUser'
import NameUser from './NameUser'
import Level from './Level'

export default function AllStat(props)
{
  return(
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
  );
}