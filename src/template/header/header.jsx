import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import Burger from './burger';
import logo from '../../assets/img/logo.png'; 

import './header.css';

export default class Header extends Component {
  
   constructor(props) {
    super(props);

    this.state = {toggle: ''}

    this.stateToggleMenu = this.stateToggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  stateToggleMenu() {

    if(this.state.toggle === ''){
      return this.setState({...this.state, toggle: 'open'})
    }
    
    return this.setState({...this.state, toggle: ''})
    
  }

  closeMenu() {
    this.setState({...this.state, toggle: ''});
  }

  render() {
    return(
      <header className='header'>

        <Burger stateToggleMenu={this.stateToggleMenu} toggle={this.state.toggle}/>

        <Link to='/'>
          <img src={logo} className='header-logo' alt='Logo'/>
        </Link>

        <nav className='navigation' onClick={this.closeMenu}>
          <ul className='list-navigation'>
            <Link to='/' className={this.props.match ? 'active' : ''} onClick={() => this.closeMenu()}><li>Home</li></Link>
            <NavLink to='/sobre' className={this.props.match ? 'active' : ''} onClick={() => this.closeMenu()}><li>Sobre</li></NavLink>
            <NavLink to='/portfolio' className={this.props.match ? 'active' : ''} onClick={() => this.closeMenu()}><li>Portfólio</li></NavLink>
            <NavLink to='/servicos' className={this.props.match ? 'active' : ''} onClick={() => this.closeMenu()}><li>Serviços</li></NavLink>
            <NavLink to='/contato' className={this.props.match ? 'active' : ''} onClick={() => this.closeMenu()}><li>Contato</li></NavLink>
            {/*<Link to='/blog' onClick={this.closeMenu}><li>blog</li></Link>*/}
          </ul>
        </nav>

        <div className='contact-me'>
          <i className="fa fa-mobile" aria-hidden="true"></i>(21) 99088-4419
        </div>

      </header>
    )
  }
}