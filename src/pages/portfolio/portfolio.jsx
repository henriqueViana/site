import React, { Component } from 'react';
import './portfolio.css';

import PortfolioBox from '../../components/portfolio/portfolio';

export default class Portfolio extends Component {
  
  componentDidMount() {
		window.scrollTo(0,0);
   	document.title = "Criação de sites, Desenvolvimento Wordpress, Desenvolvimento Mobile, Landing Pages";
  }
	
  render() {
    return(
     <section className="page-services">
				<div className="page">
					<h1 className="title">Portfólio</h1>
					<PortfolioBox />
				</div>
			</section>
    )
  }
}
