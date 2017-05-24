import React from 'react';
import { Link } from 'react-router-dom';

import './cardServices.css'

export default props => (
  <Link to={props.linkTo} className="link-cards">
    <div className="cards">
      <div className={"cards-image-box " + props.bgImageBox}>
        <img className="cards-logo" src={props.imageSrc} alt={props.name}/>
      </div>
      <div className="cards-content">
        <div className='cards-name'>{props.name}</div>
        <div className='border-card'></div>
        {props.content}
      </div>
    </div>
  </Link>
)