import React, { Component } from 'react';
import './burger.css';

export default class Burger extends Component {
  
  render() {
    return(
      <div className={`burger ${this.props.toggle}`} onClick={this.props.stateToggleMenu}>
        <span className='element-burger'></span>
        <span className='element-burger'></span>
        <span className='element-burger'></span>
        <span className='element-burger'></span>
        <span className='element-burger'></span>
        <span className='element-burger'></span>
			</div>
    )
  }
} 