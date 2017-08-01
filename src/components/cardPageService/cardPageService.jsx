import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import sr from '../../scrollReveal';

import './cardPageService.css';

class CardPageService extends Component {

  componentDidMount() {
    let direction = this.props.index % 2 ? 'left' : 'right';
    direction = window.innerWidth < 900 ? 'bottom' : direction;

    const config = {
      origin: direction,
      duration: 700,
      delay: 100,
      distance: '50px',
      scale: 1,
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    }

    sr.reveal(this.refs.boxEfects, config);
  }

  render() {
    return (
      <section className="full-card" ref='boxEfects'>
        <article className="container-content">

          <div className="full-card-content">
            {(this.props.title) ? <h2 className="title">{this.props.title}</h2> : '' }
            {this.props.content}
            <Link to={this.props.page} className="button-project">Saiba mais</Link>
          </div>

          <div className='full-card-content-image'>
            <img className="bg" src={this.props.logo} alt={`Logo ${this.props.nameCard}`}/>
          </div>

        </article>
      </section>
    )
  }
}

export default CardPageService;
