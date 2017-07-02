import React, { Component } from 'react';
import './responseContact.css'

export default props => (
  <div className={props.className}>
    <h3>{props.title}</h3>
    <div>{props.content}</div>
  </div>
)

