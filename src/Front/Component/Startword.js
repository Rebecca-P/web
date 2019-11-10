import React, { Component } from 'react'

export default function Startword(props)
{
  if(props.isNew){
    return <p>New?</p>;
  }
  return <p>Already with us ?</p>;
}