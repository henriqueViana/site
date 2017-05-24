import React from 'react';
import { Link } from 'react-router-dom';
import './cardPortfolio.css';


export default props => (
  <Link to={props.page} className={"link-portfolio " + props.classes} >
    <section className="card-portfolio-component " >
      <img className="bg-image" src={props.image} alt={props.name}/>
      <div className="label absolute-middle">{props.name}</div>
      <div className="card-portfolio-info">
        <div className="name"> {props.name} </div>
        <div className="type"> {props.type} </div>
        <div className="go-portfolio">Clique e saiba mais sobre o projeto</div>
      </div>
    </section>
	</Link>
)