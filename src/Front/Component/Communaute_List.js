import React, { Component } from 'react'
import {  Image , Grid , Card, Button, Icon} from 'semantic-ui-react'
import '../App.css';

/* function addAFriend(gameName,addGame)
{
  addGame(gameName);
}
 */


export default function Communaute_List(props)
{
  const communaute_content = props.friends.map((friend) =>
  <Grid.Column width={4} >
    <Card id='card_item'>
      <Image  src={friend.urlImage} />
      <Card.Content>
        <Card.Header> {friend.userName} </Card.Header>
      </Card.Content>
      <Card.Content extra>
        <Button icon labelPosition='right' /* onClick={() => addAGame(game.name,props.addGame)} */>
          Buy
          <Icon name='cart plus' />
        </Button>
      </Card.Content>
    </Card>
  </Grid.Column>
  );


  return(
    <Card.Group itemsPerRow={4} id='game_list'>     
      {communaute_content}
    </Card.Group>
    );
}