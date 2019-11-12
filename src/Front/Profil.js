import React, { Component } from 'react'
import { Menu, Responsive,Dropdown  } from 'semantic-ui-react'
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
        let final_game = [];
        this.state.games.forEach(function(element) {
        final_game.push({
          tags: element.tags,
          name : element.name_game,
          urlImage : element.url_image,
          playTime : element.hour_game,
        })
      });

      this.updateUserGames(final_game, this.props.user._id);

      });

    }else alert('Ah bah en fait non... Tu as déjà le jeu!');

  }

  handleAddHour(name)
  {
    let games = [...this.state.games];
    let index = games.findIndex(game => game.name_game === name);
    games[index] = {...games[index], hour_game: games[index].hour_game+1};
    this.setState({ games },
      () => {
        let final_game = [];
        this.state.games.forEach(function(element) {
        final_game.push({
          tags: element.tags,
          name : element.name_game,
          urlImage : element.url_image,
          playTime : element.hour_game,
        })
      });
      this.updateUserGames(final_game, this.props.user._id);
      }
    ); 
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
    compteur=0;
    this.props.func_co(false);
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
        <Responsive minWidth={830}> {/* Menu Responsive */}
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
              name='market'
              active={activeItem === 'Market'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='communaute'
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
        </Responsive>
        <Responsive maxWidth={829}> {/* Menu Responsive */}
        <Dropdown text='Menu' floating labeled button >
          <Dropdown.Menu>
            <Dropdown.Item
              text="Home" 
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}            
            />
            <Dropdown.Item
              text="Game" 
              name='game'
              active={activeItem === 'game'}
              onClick={this.handleItemClick}           
            />
            <Dropdown.Item
              text="Stat" 
              name='stat'
              active={activeItem === 'stat'}
              onClick={this.handleItemClick}           
            />
            <Dropdown.Item
              text="Friends" 
              name='friends'
              active={activeItem === 'friends'}
              onClick={this.handleItemClick}            
            />
            <Dropdown.Item
              text="Market" 
              name='market'
              active={activeItem === 'market'}
              onClick={this.handleItemClick}            
            />
            <Dropdown.Item
              text="Communaute" 
              name='communaute'
              active={activeItem === 'communaute'}
              onClick={this.handleItemClick}            
            />
            <Dropdown.Item>
              <AuthButton deco={this.handleLog} ></AuthButton>
            </Dropdown.Item>
            <Dropdown.Item>
              <DeleteButton deco={this.handleLog} userId={key_}></DeleteButton>
            </Dropdown.Item>
            
          </Dropdown.Menu>
        </Dropdown>
        </Responsive>
        {
          activeItem ==='home' ?(
          <div> {/* DONNE PERSO. DE L'UTILISATEUR */}
            <AllStat pictureUser={image_} nameUser={name_} level={level_} xp={xp_}></AllStat> 
            <br></br>
            <br></br>
            <StatUser numberGame={nb_game} hourAll={hour} ></StatUser>
          </div>
          ) : (
            activeItem ==='game' ?//Listes de Jeu
              <GameLister games={games_} addHour={this.handleAddHour}></GameLister>
            :  
            activeItem ==='stat' ?//Graphique
              <Graphic_Game options={{Color, labels, legend: {position: 'top'}}} series={series} labels={labels}/>
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