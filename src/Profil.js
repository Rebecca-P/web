import React, { Component } from 'react'
import { Button , Icon , Statistic , Image , Grid , Segment , Header , Item , List , Progress , Card , Menu} from 'semantic-ui-react'
import { Sparklines , SparklinesBars} from 'react-sparklines';
import Chart from "react-apexcharts";
import './App.css';
/*
*Type de jeu
*On pourra faire un graphique de jeux en fonction des types
widget profil
widget graphic type de jeu
widget liste d'amis
jeu: Image, nom, heure de jeux, type
*/
class Profil extends Component {
  constructor(props){
    super(props);
    this.state ={
      showForm : false,
      nameUser : 'User',
      pictureUser: 'https://image.flaticon.com/icons/svg/235/235438.svg',
      numberGame: 10,
      level : 20,
      xp:50,
      hourAll: 3000,
      
      games : [
        {id: 1, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_game:'Game1', hour_game:'1000' },
        {id: 2, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_game:'Game2', hour_game:'1000'},
        {id: 3, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_game:'Game3', hour_game:'1000'},
        // {id: 4, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_game:'Game3', hour_game:'1000'},
        // {id: 5, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_game:'Game3', hour_game:'1000'},
        // {id: 6, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_game:'Game3', hour_game:'1000'},
        // {id: 7, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_game:'Game3', hour_game:'1000'}

      ],
     

      friends : [
        {id: 1, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_player:'PlayerA'},
        {id: 2, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_player:'PlayerB'},
        {id: 3, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_player:'PlayerC'},
        {id: 4, url_image:'https://images-na.ssl-images-amazon.com/images/I/514UKMPbGOL.jpg' , name_player:'PlayerD'}
      ],

      //Diagramme
      options: {
        colors: ['#ced6fd', '#cefdde', '#fdcfce', '#fdceeb'],
        
        labels: ['Rpg', 'Simulation', 'Musique', 'Combat'],
        
        
      },
      series: [44, 55, 41, 17],
      

      //menu default onglet
      activeItem: 'game',

    };
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const  activeItem  = this.state.activeItem;

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
            <StatUser numberGame={this.state.numberGame} hourAll={this.state.hourAll} ></StatUser>
          </div>
          ) : (
            activeItem ==='game' ?
              <GameLister games={this.state.games} ></GameLister>
            :  
            activeItem ==='stat' ?//Graphique
            <div id='graphic'>
              <Chart 
                options={this.state.options} 
                series={this.state.series} 
                type="donut" 
                labels={this.state.labels}
                width="700" />
            </div>
              
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
//à mettre à jour
function Graphic_Game(props)
{
  return(
    <Sparklines data={[5, 10, 5, 20]} width={50} height={20} margin={5} xLabels={["nothing", "1","2","3"]}>
      <SparklinesBars style={{ stroke: "white", strokeWidth: "0.1", fill: "#40c0f5" }}/>
    </Sparklines>
  );
}

//Game
//Faire un voir + s'il y a + de 4 jeux
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


//Friends
//Faire un voir + s'il y a + de 4 amis
function FriendLister(props)
{
  const friend_content = props.friends.map((friend) =>
  <List.Item>
    <Card>
      <Image  src={friend.url_image} />
      <Card.Content>
        <Card.Header> {friend.name_player} </Card.Header>
      </Card.Content>
    </Card>
  </List.Item>
  );

  return(
    <Segment >
      <Header as='h2'>
        Player Friends
      </Header>
      <List divided relaxed animated size='huge' horizontal verticalAlign='middle'>     
        {friend_content}
      </List>
    </Segment>
  );
}
export default Profil;