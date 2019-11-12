import React, { Component } from 'react'
import {  Image , Grid , Segment , Header  ,  Card ,  Modal,Responsive} from 'semantic-ui-react'

export default function FriendLister(props)
{
  
  //si aucun Ami
  if(props.friends.length === 0)
  {
    return(
      <Segment >
        <Header as='h2'>
        Player Friends
        </Header>
        <Card.Group itemsPerRow={4}>     
          <Card>
            <Card.Content>
              <Card.Header> Vous n'avez aucun ami</Card.Header>
            </Card.Content>
          </Card>
        </Card.Group>
      </Segment>
    );
  }

  ///Sinon
  const friend_content = props.friends.map((friend) =>//mode colonne
  <Grid.Column width={4} >
    <Card id='card_item'>
      <Image  src={friend.urlImage} />
      <Card.Content>
        <Card.Header> {friend.userName} </Card.Header>
      </Card.Content>
    </Card>
  </Grid.Column>
  );

  const friend2_content = props.friends.map((friend) =>//mode 1 par ligne
    <Card id='card_item2'>
      <Image  size='tiny' src={friend.urlImage} />
      <Card.Content>
        <Card.Header> {friend.userName} </Card.Header>
      </Card.Content>
    </Card>
  );

    
    return(
      <Segment>
        <Header as='h2'>
          Player Friends
        </Header>
        
          <Responsive minWidth={830}>
            <Card.Group itemsPerRow={4}>     
              {friend_content}
            </Card.Group>
          </Responsive>
        <div id="friends">
          <Responsive maxWidth={829}>
            <Card.Group stackable >     
                {friend2_content}
              </Card.Group>
          </Responsive>
        </div>
        
        
      </Segment> 
    );
}