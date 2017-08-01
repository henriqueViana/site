import React, { Component } from 'react';

import CardPortfolio from '../cardPortfolio/cardPortfolio';

import imgAcquaclass from '../../assets/img/portfolio/acq_banner.jpg';
import imgAcquaclassApp from '../../assets/img/portfolio/acq_app_banner.jpg';
import imgIplantao from '../../assets/img/portfolio/ipl_banner.jpg';
import imgEventsys from '../../assets/img/portfolio/eventsys-capa.jpg';
import imgImpa from '../../assets/img/portfolio/impa_banner.jpg';

import './portfolio.css';

import sr from '../../scrollReveal';


export default class Portfolio extends Component{

	componentDidMount() {
		const config = {
      origin: 'bottom',
      duration: 700,
      delay: 100,
      distance: '50px',
      scale: 1,
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    }

    sr.reveal(this.refs.boxEfects, config)
	}

	render() {
		return(
			<section className="portfolio" ref='boxEfects'>
				<CardPortfolio name="Iplantão" type="Site e Sistema Web" page="/portfolio/iplantao" image={imgIplantao}/>
				<CardPortfolio name="Eventsys" type="Desenvolvimento Front End" page="/portfolio/eventsys" image={imgEventsys}/>
				<CardPortfolio name="Impa" type="Desenvolvimento Wordpress" page="/portfolio/impa" image={imgImpa}/>
				<CardPortfolio name="Acquaclass" type="Site e Sistema Web" page="/portfolio/acquaclass" image={imgAcquaclass}/>
				<CardPortfolio name="Acquaclass App" type="Aplicativo" page="/portfolio/acquaclass-app" image={imgAcquaclassApp}/>
				<CardPortfolio classes='hide' name="Acquaclass App" type="Aplicativo" page="/portfolio/acquaclass-app" image={imgAcquaclassApp}/>
			</section>
		)
	}
}
