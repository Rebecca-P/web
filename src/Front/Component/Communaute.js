import React, { Component  } from 'react'
import { Menu , Header , Icon, Segment, Grid } from 'semantic-ui-react'
import '../App.css';
import Communaute_List from './Communaute_List'

export default class Communaute extends Component
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
            Communaute 
          </Header>
        <Grid>
          <Grid.Column stretched >
            <Segment id='market_item'>
              <Communaute_List/>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
        
    ); 
  }
}