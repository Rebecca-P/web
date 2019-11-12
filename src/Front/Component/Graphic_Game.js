import React, { Component } from 'react'
import Chart from "react-apexcharts";
import {  Responsive  } from 'semantic-ui-react'

export default function Graphic_Game(props)
{
  console.log(typeof props.options)
  return(
    
    <div>
      <Responsive minWidth={830}>
        <Chart 
        options={props.options} 
        series={props.series} 
        type="donut" 
        labels={props.labels}
        width="700" />
      </Responsive>
      <Responsive maxWidth={829} minWidth={601}>
        <Chart 
        options={props.options} 
        series={props.series} 
        type="donut" 
        labels={props.labels}
        width="450" />
      </Responsive> 
      <Responsive maxWidth={600} minWidth={371}>
        <Chart 
        options={props.options} 
        series={props.series} 
        type="donut" 
        labels={props.labels}
        width="350" />
      </Responsive>
      <Responsive maxWidth={370} >
        <p>L'écran est trop petit pour afficher le graphique!</p>
      </Responsive>  
    
  </div>
  );
}