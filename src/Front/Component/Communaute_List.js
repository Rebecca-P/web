import React, { Component } from 'react'
import {  Image , Grid , Card, Button, Icon,Responsive} from 'semantic-ui-react'
import '../App.css';



let index_commu = false;

export default function Communaute_List(props)
{
  //si aucun Ami
  if(props.friends.length === 0)
  {
    return(
      
        <Card.Group itemsPerRow={4}>     
          <Card>
            <Card.Content>
              <Card.Header>Bah....Où est notre petite communauté? Vous devriez revenir plus tard! =)</Card.Header>
            </Card.Content>
          </Card>
        </Card.Group>
      
    );
  }

  let communaute_content = props.friends.map((friend) =>
  <Grid.Column width={4} >
    <Card id='commu_item'>
      <Image  src={friend.urlImage} />
      <Card.Content>
        <Card.Header> {friend.userName} </Card.Header>
      </Card.Content>
      <Card.Content extra>
        <Button icon labelPosition='right' disabled={index_commu} onClick={() => 
          alert("Demande envoyé!")
        } 
          >
          I choose you my friend !
          <Icon name='plus' />
        </Button>
      </Card.Content>
    </Card>
  </Grid.Column>
  );
  let communaute_content2 = props.friends.map((friend) =>
  <Grid.Column width={1} >
    <Card>
      <Image  src={friend.urlImage} />
      <Card.Content>
        <Card.Header> {friend.userName} </Card.Header>
      </Card.Content>
      <Card.Content extra>
        <Button icon onClick={() => 
          alert("Demande envoyé!")
        } 
        >
          <Icon name='plus' />
        </Button>
      </Card.Content>
    </Card>
  </Grid.Column>
  );


  return(
    <div>
      <Responsive minWidth={830}>
        <Card.Group itemsPerRow={4} id='game_list'>     
          {communaute_content}
        </Card.Group>
      </Responsive>
      <Responsive maxWidth={829}>
      <Card.Group itemsPerRow={1} id='game_list'>     
          {communaute_content2}
        </Card.Group>
      </Responsive>
    </div>
    
    );
}
