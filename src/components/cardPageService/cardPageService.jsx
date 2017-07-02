import React from 'react';
import { Link } from 'react-router-dom';

import './cardPageService.css';

export default props => (
  <section className="full-card">
    <article className="container-content">

      <div className="full-card-content">
        {(props.title) ? <h2 className="title">{props.title}</h2> : '' }
        {props.content}
        <Link to={props.page} className="button-project">Saiba mais</Link>
      </div>

      <div className='full-card-content-image'>
        <img className="bg" src={props.logo} alt={`Logo ${props.nameCard}`}/>
      </div>

    </article>
  </section>
)
