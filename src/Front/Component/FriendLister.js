import React, { Component } from 'react'
import {  Image , Grid , Segment , Header  ,  Card ,  Modal} from 'semantic-ui-react'

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
  const friend_content = props.friends.map((friend) =>
  <Grid.Column width={4} >
    <Card id='card_item'>
      <Image  src={friend.urlImage} />
      <Card.Content>
        <Card.Header> {friend.userName} </Card.Header>
      </Card.Content>
    </Card>
  </Grid.Column>
  );


    if(props.friends.length > 4)
    {
      const mini_content = props.friends.slice(0,4);
      const mini_friend_content = mini_content.map((friend) =>
      
        <Card id='card_item'> 
          <Image  src={friend.urlImage} />
          <Card.Content>
            <Card.Header> {friend.userName} </Card.Header>
          </Card.Content>
        </Card>
      
      );
  
      return(
        <Segment >
          <Header as='h2'>
            Player Friends
          </Header>
          <Card.Group itemsPerRow={4}>     
            {mini_friend_content}
          </Card.Group>
  
          <Modal 
            trigger={
                <Card fluid color='red'>                  
                  <Card.Content>
                    <Card.Header> See All </Card.Header>
                  </Card.Content>
                </Card>
            }
            closeIcon
            basic
            
            >
          <Modal.Content>
          <Header as='h2' textAlign='center'>
              Player Friends
            </Header>
            <Card.Group centered textAlign='center' itemsPerRow={3} >   
              {friend_content}
            </Card.Group>
          </Modal.Content>
          </Modal>
        </Segment>
      );
      
    }
    
    return(
      <Segment >
        <Header as='h2'>
          Player Friends
        </Header>
        <Card.Group itemsPerRow={4}>     
          {friend_content}
        </Card.Group>
      </Segment> 
    );
}