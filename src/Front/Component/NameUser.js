import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'


export default function NameUser({nameUser}) {
  return(
    <Header size='huge' textAlign='center'>
      {nameUser}
    </Header>
  );
}