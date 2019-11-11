import React, { Component } from 'react'
import {  Image , Grid , Card, Button, Icon, Confirm} from 'semantic-ui-react'
import '../App.css';
import gameItem from './Game_Market'

//variable

let gameName_ ='';
 

function addAGame(gameName,addGame)
{
  gameName_=gameName;
  alert('Vous avez acheté '+ gameName_);
  addGame(gameName);
}

export default function Market_List(props)
{
  const game_content = gameItem.map((game) =>
  <Grid.Column width={4} >
    <Card id='game_item'>
      <Image size='medium' src={game.image} />
      <Card.Content>
        <Card.Header> {game.name} </Card.Header>
        <Card.Meta>
          <span >{game.tag+''} </span>
        </Card.Meta>
        
      </Card.Content>
      <Card.Content extra>
        <Button icon labelPosition='right' onClick={() => addAGame(game.name,props.addGame)}>
          Buy
          <Icon name='cart plus' />
        </Button>
      </Card.Content>
    </Card>
  </Grid.Column>
  );


  return(
    
    <Card.Group itemsPerRow={4} id='game_list'>     
      {game_content}
    </Card.Group>
    
    );
}