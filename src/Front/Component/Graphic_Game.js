import React, { Component } from 'react'
import Chart from "react-apexcharts";

export default function Graphic_Game(props)
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