import React, { Component } from 'react';
import Slider from 'react-slick';
import sr from '../../scrollReveal';

import '../default-portfolio.css';


import impa1 from '../../assets/img/portfolio/impa1.jpg';
import impa2 from '../../assets/img/portfolio/impa3.jpg';
import impa3 from '../../assets/img/portfolio/impa4.jpg';
import impa4 from '../../assets/img/portfolio/impa5.jpg';
import impa5 from '../../assets/img/portfolio/impa6.jpg';
import logoImpa from '../../assets/img/portfolio/logo_impa.png';

export default class Impa extends Component{
	
	constructor(props){
		super(props);
		window.scrollTo(0,0);
	}

	componentDidMount() {
   	document.title = "Projeto de criação de site | painel administrativo";

		const config = {
      origin: 'bottom',
      duration: 700,
      delay: 300,
      distance: '100px',
      scale: 1,
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    }

    sr.reveal(this.refs.boxContent, config)
  }

	render(){

		var settings = {
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: false, 
			infinite: true
    };

		return(

			<section className="inner-portfolio">
				<section className='container-slide'>
					<div className='mask'>

						<div className='inner-mask'>
							<img src={logoImpa} className="logo-portfolio" alt="Logo Impa"/>
							<div className='service'><span>Serviço: </span>Desenvolvimento Wordpress</div>
							<div className='service'><span>Produto: </span>Site & Tema</div>
							<div className='service'><span>Tecnologias: </span>HTML, CSS, JavaScript, PHP, Wordpress, MySQL</div>
						</div>
					</div>

					<Slider {...settings}>
						<img src={impa1} className="img-portfolio" alt="Imagem portfólio Impa"/>
						<img src={impa2} className="img-portfolio" alt="Imagem portfólio Impa"/>
						<img src={impa3} className="img-portfolio" alt="Imagem portfólio Impa"/>
						<img src={impa4} className="img-portfolio" alt="Imagem portfólio Impa"/>
						<img src={impa5} className="img-portfolio" alt="Imagem portfólio Impa"/>
				</Slider>

				</section>

				<div className="page">
					<h1 className="title">Projeto Impa</h1>
					<h3 className="subtitle">Desenvolvimento Wordpress</h3>
				</div>

				<div className="content">
					<div className="page" ref='boxContent'>

						<section className="description">
							<div className='line'>
                Projeto do novo site do IMPA, foi feito a revitalização e desenvolvimento de um 
                novo tema, do zero, para a plataforma Wordpress.
							</div>
              <div className='line'>
                Foram desenvolvidas funcionalidades internas para facilitar a edição de conteúdo pela 
                dashboard do Wordpress como, Custon Post Types, Custon Fiels, Plugins, entre outros. 
              </div>
						
							<br/>
							<div className='line'>
								Para atender as necessidades do cliente, foram desenvolvidas as seguintes funcionalidades:
							</div>
							
							<div><span className="arrow">&#10148;</span>Edição de conteúdo</div>
							<div><span className="arrow">&#10148;</span>Edição do slider pela Dashboard</div>
							<div><span className="arrow">&#10148;</span>Configuração de colunas pelo editor</div>
							<div><span className="arrow">&#10148;</span>Bilingue (Português / Inglês)</div>
						</section>
						

						<section className="attributes">

						</section>

					</div>

				</div>
			</section>
		)
	}
}