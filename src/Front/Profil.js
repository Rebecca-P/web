import React, { Component } from 'react'
import { Menu, Confirm,Button  } from 'semantic-ui-react'
import './App.css';
import AllStat from'./Component/AllStat'
import Graphic_Game from './Component/Graphic_Game'
import GameLister from './Component/GameLister'
import FriendLister from './Component/FriendLister'
import AuthButton from './Component/AuthButton'
import StatUser from './Component/StatUser'
import Market from './Component/Market'
import gameItem from './Component/Game_Market'
import Communaute from './Component/Communaute'
import DeleteButton from './Component/DeleteButton'
import Color from './Component/Colors'

const fetch = require('node-fetch');
//Valeur par default
let compteur=0;
class Profil extends Component {
  constructor(props){
    super(props);
    this.handleLog = this.handleLog.bind(this);
    this.handleAddGame = this.handleAddGame.bind(this);
    this.handleAddHour = this.handleAddHour.bind(this);
    this.handleStat = this.handleStat.bind(this);
    this.updateUserGames = this.updateUserGames.bind(this);
    this.state ={   
      games : [],
      //menu default onglet
      activeItem: 'home',
    };
  }
 
  
async updateUserGames(updatedGames, user_id)
{
  const toSend = {
    games: updatedGames,
    userId: user_id,
  };

  //console.log(toSend);

  await fetch('http://127.0.0.1:3001/updateUser', {  
      method: 'PUT',
      mode: 'cors',  
      headers: {  
        'Content-Type': 'application/json'
      },  
      body: JSON.stringify(toSend)
  })
  .then(function (){
    //console.log('Games updated successfully');
  })
  .catch(function (error) {  
    console.log('Request failure: ', error);  
    return error;
  });
}
  

  async handleAddGame(name)
  {  
    if(this.state.games.find( game => game.name_game === name) === undefined)
    {
      const resultat = gameItem.find( game => game.name === name);
      this.setState({
        games: [ ...this.state.games , { url_image:resultat.image , name_game:resultat.name, hour_game:0, tags:resultat.tag }],
      }, () => {
        console.log(this.state.games);
        //console.log(resultat);
        this.updateUserGames(this.state.games, this.props.user._id);

      });

    }else alert('Ah bah en fait non... Tu as déjà le jeu!');

  }

  handleAddHour(name)
  {
    let games = [...this.state.games];
    let index = games.findIndex(game => game.name_game === name);
    games[index] = {...games[index], hour_game: games[index].hour_game+1};
    this.setState({ games }); 
  }

  handleStat(game_)
  {
    let resultat_temp = [];
    game_.forEach(function(element) {
      element.tags.forEach(function(tag){
        resultat_temp.push(tag);
      })
    });
    resultat_temp.sort();
    let resultat_count = [];
    let resultat_ = [];
    resultat_temp.forEach(function(element) {
      if(resultat_.find( tag => tag === element) === undefined )
      {
        resultat_.push(element);
        resultat_count.push(1);
      }else{
        let temp = resultat_count[resultat_count.length - 1];
        resultat_count.pop();
        temp ++;
        resultat_count.push(temp);
      }
    });
   

    return [resultat_ , resultat_count];
  }
  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  handleLog(){
    
    this.props.func_co(false);
    compteur=0;
  }
  
  render(){
    const  activeItem  = this.state.activeItem;
    let key_=0;
    let name_='';
    let image_='https://image.flaticon.com/icons/svg/235/235438.svg';
    let level_=0;
    let xp_=0;
    let hour = 0;
    let nb_game = 0;
    let friends = [];
    let games_=[];
    let series= [44, 55, 41, 17];
    let labels= ['Rpg', 'Simulation', 'Musique', 'Combat'];
    let stat= [];

    //Utilisation direct de la props
    //Valeur MAJ
    if(this.props.user!== null)
    {
      key_=this.props.user._id;
      name_=this.props.user.profile.userName;
      image_=this.props.user.profile.urlImage;
      level_=this.props.user.profile.level;
      xp_=this.props.user.profile.XP;
      friends =this.props.user.friends;
      games_=[];//clear
      if(compteur===0)
      {
        this.props.user.games.forEach(function(element) {
          games_.push({ url_image:element.urlImage , name_game:element.name, hour_game:element.playTime, tags:element.tags })
        });
        Array.prototype.push.apply(games_, this.state.games);
        this.setState({ games: games_ });
        compteur++;
      }else{
        games_=this.state.games;
      }
      
      //if(this.state.games !== undefined)
      games_.forEach(function(element) {
        hour += element.hour_game;
      });
      nb_game = games_.length;
      stat = this.handleStat(games_);
      labels = stat[0];
      series = stat[1];
    }
    
    
    return(
      <div id='profil' key={key_}>
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
          <Menu.Item
            name='Market'
            active={activeItem === 'Market'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Communaute'
            active={activeItem === 'communaute'}
            onClick={this.handleItemClick}
          />
          
          <Menu.Menu position='right'>
            <Menu.Item>
              <AuthButton deco={this.handleLog} ></AuthButton>
            </Menu.Item>
            <Menu.Item >
              <DeleteButton deco={this.handleLog} userId={key_}></DeleteButton>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        {
          activeItem ==='home' ?(
          <div>
            <AllStat pictureUser={image_} nameUser={name_} level={level_} xp={xp_}></AllStat> 
            <br></br>
            <br></br>
            <StatUser numberGame={nb_game} hourAll={hour} ></StatUser>
          </div>
          ) : (
            activeItem ==='game' ?
              <GameLister games={games_} addHour={this.handleAddHour}></GameLister>
            :  
            activeItem ==='stat' ?//Graphique
              <Graphic_Game options={{Color, labels}} series={series} labels={labels}/>
            :
            activeItem ==='friends' ?
              <FriendLister friends={friends}></FriendLister>
            :
            activeItem ==='Market' ?
              <Market addGame={this.handleAddGame}/>
            :
            activeItem ==='communaute' ?
              <Communaute/>
            :  
            <Market addGame={this.handleAddGame}/>
            
          )
        }
        
      </div>    
    ); 
  }
}


export default Profil;