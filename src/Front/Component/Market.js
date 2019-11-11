import React, { Component  } from 'react'
import { Menu , Header , Icon, Segment, Grid } from 'semantic-ui-react'
import '../App.css';
import Market_List from './Market_List'
import gameItem from './Game_Market'

export default class Market extends Component
{
  

  constructor(props){
    super(props);
    this.state ={
    };
  }

  
    
  render(){
    return(
      <div id='market'>
        <br></br>
        <Header as='h1' image='cart' content='MarketPlace' >
            <Icon name='cart'></Icon> 
            MarketPlace 
          </Header>
        <Grid>
          <Grid.Column stretched >
            <Segment id='market_item'>
              <Market_List addGame={this.props.addGame}/>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
        
    ); 
  }
}