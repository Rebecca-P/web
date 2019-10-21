import React, { Component } from 'react'
import { Button , Icon , Statistic , Image , Grid , Segment , Header  , List , Progress , Card , Menu , Modal} from 'semantic-ui-react'
import { Sparklines , SparklinesBars} from 'react-sparklines';
import Chart from "react-apexcharts";
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Profil extends Component {
  constructor(props){
    super(props);
    this.state ={
      showForm : false,
      /* nameUser : 'User',
      pictureUser: 'https://image.flaticon.com/icons/svg/235/235438.svg',
      numberGame: 10,
      level : 20,
      xp:50,
      hourAll: 3000,
      games : [
        {id: 1, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_game:'Game1', hour_game:'1000' },
        {id: 2, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_game:'Game2', hour_game:'1000'},
        {id: 3, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_game:'Game3', hour_game:'1000'},
        {id: 4, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_game:'Game4', hour_game:'1000'},
        {id: 5, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_game:'Game5', hour_game:'1000'},
        {id: 6, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_game:'Game6', hour_game:'1000'},
        {id: 7, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_game:'Game7', hour_game:'1000'}
      ],
      friends : [
        {id: 1, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_player:'PlayerA'},
        {id: 2, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_player:'PlayerB'},
        {id: 3, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_player:'PlayerC'},
        {id: 4, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_player:'PlayerD'},
        {id: 5, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_player:'PlayerE'},
        {id: 6, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_player:'PlayerF'},
        {id: 7, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_player:'PlayerG'},
        {id: 8, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_player:'PlayerH'},
        {id: 9, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_player:'PlayerI'},
        {id: 10, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_player:'PlayerJ'},
        {id: 11, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_player:'PlayerK'},
        {id: 12, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_player:'PlayerL'},
        {id: 13, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_player:'PlayerM'},
      ], */
      nameUser : props.nameUser,
      pictureUser: props.pictureUser,
      numberGame: props.numberGame,
      level : props.level,
      xp : props.xp,
      hourAll: props.hourAll,
      games : props.games,
      friends : props.friends,
      //Diagramme
      options: {
        colors: ['#ced6fd', '#cefdde', '#fdcfce', '#fdceeb'],
        
        labels: ['Rpg', 'Simulation', 'Musique', 'Combat'],
        
        
      },
      series: [44, 55, 41, 17],
      

      //menu default onglet
      activeItem: 'friends',

    };
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const  activeItem  = this.state.activeItem;
    const nb_game = this.state.games.length;
    return(
      <div id='profil'>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='game'
            active={activeItem === 'game'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='stat'
            active={activeItem === 'stat'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
        
        {
          activeItem ==='home' ?(
          <div>
            <AllStat pictureUser={this.state.pictureUser} nameUser={this.state.nameUser} level={this.state.level} xp={this.state.xp}></AllStat> 
            <br></br>
            <br></br>
            <StatUser numberGame={nb_game} hourAll={this.state.hourAll} ></StatUser>
          </div>
          ) : (
            activeItem ==='game' ?
              <GameLister games={this.state.games} ></GameLister>
            :  
            activeItem ==='stat' ?//Graphique
              <Graphic_Game options={this.state.options} series={this.state.series} labels={this.state.labels}/>
              
            :
            activeItem ==='friends' ?
              <FriendLister friends={this.state.friends}></FriendLister>
            :
            <AllStat pictureUser={this.state.pictureUser} nameUser={this.state.nameUser} level={this.state.level} xp={this.state.xp}></AllStat>
          )
        }
        
        
      </div>  
      
      
    );
  }
}

//Profil
function NameUser({nameUser}) {
  return(
    <Header size='huge'>
      {nameUser}
    </Header>
  );
}

function PictureUser({pictureUser})
{
  return(
    <Image src={pictureUser} avatar size='small' id='picture'/> 
  );
}

function Level(props)
{
  return(
    <Statistic color='green'> 
        <Statistic.Label>Niveau</Statistic.Label>
        <Statistic.Value>{props.level}</Statistic.Value>        
      </Statistic>
  );
}

function StatUser(props) {
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

function AllStat(props)
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
//Graphic
function Graphic_Game(props)
{
  return(
    
    <div id='graphic'>
    <Chart 
      options={props.options} 
      series={props.series} 
      type="donut" 
      labels={props.labels}
      width="700" />
  </div>
  );
}


function GameLister(props)
{
  const game_content = props.games.map((game) =>
  <List.Item>    
      <Image avatar size='small' src={game.url_image} />
      <List.Content verticalAlign='middle'>
        <List.Header>
          {game.name_game}
        </List.Header>
        <List.Description>
        {game.hour_game}h
        </List.Description>
      </List.Content>
  </List.Item>
  );

  if(props.games.length > 4)
  {
    const mini_content = props.games.slice(0,4);
    const mini_game_content = mini_content.map((game) =>
      <List.Item>    
          <Image avatar size='small' src={game.url_image} />
          <List.Content verticalAlign='middle'>
            <List.Header>
              {game.name_game}
            </List.Header>
            <List.Description>
            {game.hour_game}h
            </List.Description>
          </List.Content>
      </List.Item>
    );

    return(
      <Segment >
        <Header as='h2'>
          My Games 
        </Header>
        <List divided relaxed='very' animated verticalAlign='middle' size='large'>     
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
          <List divided relaxed='very' animated verticalAlign='middle' size='large'>     
            {game_content}
          </List>
        </Modal.Content>
        </Modal>
        
      </Segment>
    );
    
  }
  
  

  return(
    <Segment >
      <Header as='h2'>
        My Games 
      </Header>
      <List divided relaxed='very' animated verticalAlign='middle' size='large'>     
        {game_content}
      </List>
    </Segment>
  );
}



function FriendLister(props)
{
  

  const friend_content = props.friends.map((friend) =>
  <Grid.Column width={4} >
    <Card>
      <Image  src={friend.url_image} />
      <Card.Content>
        <Card.Header> {friend.name_player} </Card.Header>
      </Card.Content>
    </Card>
  </Grid.Column>
  );


    if(props.friends.length > 4)
    {
      const mini_content = props.friends.slice(0,4);
      const mini_friend_content = mini_content.map((friend) =>
      
        <Card>
          <Image  src={friend.url_image} />
          <Card.Content>
            <Card.Header> {friend.name_player} </Card.Header>
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
export default Profil;