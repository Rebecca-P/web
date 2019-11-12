import React, { Component } from 'react'
import { Button , Image , Segment , Header  , List ,  Modal,Icon,Responsive} from 'semantic-ui-react'

function addAHour(gameName,addHour)
{
  addHour(gameName);
}

export default function GameLister(props)
{
  //si aucun Jeux
  if(props.games.length === 0)
  {
    return(
      <Segment >
        <Header as='h2'>
          My Games 
        </Header>
        <List divided relaxed='very' animated verticalAlign='middle' size='large'>     
          <List.Item>    
            <List.Content verticalAlign='middle'>
              <List.Header>
                Vide
                </List.Header>
                <List.Description>
                  Vous n'avez aucun jeux
                </List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Segment>
    );
  }
  //tout les jeux;
  const game_content = props.games.map((game) =>
  <List.Item>    
      <Image  size='small' src={game.url_image} />
      <List.Content verticalAlign='middle'>
        <List.Header>
          {game.name_game}
        </List.Header>
        <List.Description>
          {game.hour_game}h
          <Button icon labelPosition='right' onClick={() => addAHour(game.name_game,props.addHour)} >
            Add 1 Hour
            <Icon name='plus' />
          </Button>
        </List.Description>
      </List.Content>
  </List.Item>
  );

  //mode nombres jeux superieur à 4
  if(props.games.length > 2)
  {
    const mini_content = props.games.slice(0,2);
    const mini_game_content = mini_content.map((game) =>
      <List.Item>    
          <Image  size='small' src={game.url_image} />
          <List.Content verticalAlign='middle'>
            <List.Header>
              {game.name_game}
            </List.Header>
            <List.Description>
              {game.hour_game}h
              <Button icon labelPosition='right' onClick={() => addAHour(game.name_game,props.addGame)} >
                Add 1 Hour
                <Icon name='plus' />
              </Button>
            </List.Description>
          </List.Content>
      </List.Item>
    );

    return(
      <Segment >
        <Header as='h2'>
          My Games 
        </Header>
        <Responsive minWidth={830}>
          <List divided relaxed='very' animated verticalAlign='middle' size='small'>     
            {mini_game_content}
          </List>
            <Modal 
            trigger={<Button size='large' fluid >See All</Button>}
            size='large'
            dimmer='blurring'
            >
            <Modal.Content>
              <Header as='h2'>
                My Games 
              </Header>
              <List divided relaxed='very' animated verticalAlign='middle' size='small'>     
                {game_content}
              </List>
            </Modal.Content>
          </Modal>
        </Responsive>
        <Responsive maxWidth={829}>
        <List divided relaxed='very' animated verticalAlign='middle' size='tiny'>     
          {mini_game_content}
        </List>
          <Modal 
            trigger={<Button size='large' fluid >See All</Button>}
            size='tiny'
            dimmer='blurring'
          >
            <Modal.Content>
              <Header as='h2'>
                My Games 
              </Header>
              <List divided relaxed='very' animated verticalAlign='middle' size='small'>     
                {game_content}
              </List>
            </Modal.Content>
          </Modal>
        </Responsive>
      </Segment>
      );
    }

  return(
    <Segment >
      <Header as='h2'>
        My Games 
      </Header>
      <Responsive minWidth={830}>
        <List divided relaxed='very' animated verticalAlign='middle' size='small'>     
          {game_content}
        </List>
      </Responsive>
      <Responsive maxWidth={829}>
      <List divided relaxed='very' animated verticalAlign='middle' size='tiny'>     
        {game_content}
      </List>
      </Responsive>
      
    </Segment>
  );
}