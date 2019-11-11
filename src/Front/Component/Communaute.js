import React, { Component  } from 'react'
import { Menu , Header , Icon, Segment, Grid, Button } from 'semantic-ui-react'
import '../App.css';
import Communaute_List from './Communaute_List'

const fetch = require('node-fetch');
let all = [] ;
let list = [];
export default class Communaute extends Component
{
  

  constructor(props){
    super(props);
    this.GetAll = this.GetAll.bind(this);
    this.userCommu = this.userCommu.bind(this);
  }

  async GetAll()
  {
    fetch('http://127.0.0.1:3001/getAllUsers', {  
      method: 'GET',
      mode: 'cors',  
      headers: {  
        'Content-Type': 'application/json'
      },
    })
    .then(function (result){
    return result.json();
    })
    .then((data) => {
    all = data;
    list = [];
    all.forEach(function(element){
      list.push({
        urlImage:element.profile.urlImage,
        userName:element.profile.userName,

      })
      })
      console.log(list)
    })
    .catch(function (error) {  
    console.log('Request failure: ', error);  
    return error;
    });
  }

  async userCommu()
  {
    await this.GetAll();
  }


    
  render(){
    
    this.userCommu();
    return(
      <div id='market'>
        <br></br>
        <Header as='h1' image='cart' content='MarketPlace' >
            <Icon name='cart'></Icon> 
            Communaute 
          </Header>
        <Grid>
          <Grid.Column stretched >
            <Segment id='market_item'>
              <Communaute_List friends={list}/>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
        
    ); 
  }
}