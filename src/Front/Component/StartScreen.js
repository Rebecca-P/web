import React, { Component } from 'react'
import ShowSignIn from './ShowSignIn'
import ShowLogIn from './ShowLogIn'
export default function StartScreen(props)
{
  if(!props.isNew){
    return <ShowSignIn handleChange={props.handleChange} handleSubmit={props.handleSubmitNew}/>;
  }
  return <ShowLogIn handleChange={props.handleChange} handleSubmit={props.handleSubmit}/>;
}
 