import React, { Component } from 'react';
import Slider from 'react-slick';
import sr from '../../scrollReveal';

import acq1 from '../../assets/img/portfolio/acq1.jpg';
import acq2 from '../../assets/img/portfolio/acq2.jpg';
import logoAcquaclass from '../../assets/img/portfolio/logo_acquaclass.png';

class Acquaclass extends Component{

	constructor(props){
		super(props);
		window.scrollTo(0,0);
	}

	componentDidMount() {
   	document.title = "Projeto de criação de site para a empresa Acquaclass";

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
							<img src={logoAcquaclass} className="logo-portfolio" alt="Logo Acquaclass"/>
							<div className='service'><span>Serviço: </span>Desenvolvimento Front End</div>
							<div className='service'><span>Produto: </span>Site</div>
							<div className='service'><span>Tecnologias: </span>HTML, CSS</div>
						</div>
					</div>

					<Slider {...settings}>
						<img src={acq1} className="img-portfolio" alt="Imagem portfólio Acquaclass"/>
						<img src={acq2} className="img-portfolio" alt="Imagem portfólio Acquaclass"/>
					</Slider>

				</section>
				
				<div className="page">
					<h1 className="title">Projeto Acquaclass</h1>
					<h3 className="subtitle">
						Desenvolvimento de site institucional e sistema web (em andamento)
					</h3>
				</div>

				<div className="content">
					<div className="page" ref='boxContent'>
						<section className="description">
							
							<div className="line">
								A empresa Acquaclass é focada em redução e otimização de água e oferece um
								produto que auxia aos seus clientes na economia e gerenciamento hídrico do seu 
								estabelecimento.
							</div>
							
							<div className="line">
								O site institucional surgiu como uma necessidade de apresentar a empresa aos
								seus clientes em potêncial e o sistema integra uma melhor experiência de uso, 
								oferecedo todos os resultados para seus clientes. 
							</div>


						</section>

						<section className="attributes">
						</section>
					</div>
				</div>
			</section>
		)
	}
}

export default Acquaclass;