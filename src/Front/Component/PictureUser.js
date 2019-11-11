import React, { Component } from 'react'
import { Button , Icon , Statistic , Image , Grid , Segment , Header  , List , Progress , Card , Menu , Modal} from 'semantic-ui-react'

export default function PictureUser({pictureUser})
{
  return(
    <Image src={pictureUser} avatar size='small' id='picture'/> 
  );
}