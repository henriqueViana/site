import React from 'react';
import Slider from 'react-slick';
import sr from '../../scrollReveal';

import '../default-portfolio.css';


import eventsys1 from '../../assets/img/portfolio/eventsys1.jpg';
import eventsys2 from '../../assets/img/portfolio/eventsys2.jpg';
import eventsys3 from '../../assets/img/portfolio/eventsys3.jpg';
import eventsys4 from '../../assets/img/portfolio/eventsys4.jpg';
import eventsys5 from '../../assets/img/portfolio/eventsys5.jpg';
import eventsys6 from '../../assets/img/portfolio/eventsys6.jpg';
import eventsys7 from '../../assets/img/portfolio/eventsys7.jpg';
import eventsys8 from '../../assets/img/portfolio/eventsys8.jpg';
import eventsys9 from '../../assets/img/portfolio/eventsys9.jpg';
import logoEventsys from '../../assets/img/portfolio/logo_eventsys.png';

class Eventsys extends React.Component{
	
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
							<img src={logoEventsys} className="logo-portfolio" alt="Logo Eventsys"/>
							<div className='service'><span>Serviço: </span>Desenvolvimento Front End</div>
							<div className='service'><span>Produto: </span>Dashboard</div>
							<div className='service'><span>Tecnologias: </span>HTML, CSS, JavaScript</div>
						</div>
					</div>

					<Slider {...settings}>
						<img src={eventsys1} className="img-portfolio" alt="Imagem portfólio Eventsys"/>
						<img src={eventsys2} className="img-portfolio" alt="Imagem portfólio Eventsys"/>
						<img src={eventsys3} className="img-portfolio" alt="Imagem portfólio Eventsys"/>
						<img src={eventsys4} className="img-portfolio" alt="Imagem portfólio Eventsys"/>
						<img src={eventsys5} className="img-portfolio" alt="Imagem portfólio Eventsys"/>
						<img src={eventsys6} className="img-portfolio" alt="Imagem portfólio Eventsys"/>
						<img src={eventsys7} className="img-portfolio" alt="Imagem portfólio Eventsys"/>
						<img src={eventsys8} className="img-portfolio" alt="Imagem portfólio Eventsys"/>
						<img src={eventsys9} className="img-portfolio" alt="Imagem portfólio Eventsys"/>
				</Slider>

				</section>

				<div className="page">
					<h1 className="title">Projeto Eventsys</h1>
					<h3 className="subtitle">Desenvolvimento Front End</h3>
				</div>

				<div className="content">
					<div className="page">

						<section className="description">
							<div className='line'>
								Dashboard site Eventsys ao qual administradores do mesmo gerenciam tudo relativo aos eventos  
								que administram, como gestão de inscritos, ingressos vendidos, dados financeiros, entre outros.
							</div>
						
							<br/>
							<div className='line'>
								Para atender as necessidades do cliente, foram desenvolvidas as seguintes funcionalidades:
							</div>
							
							<div><span className="arrow">&#10148;</span>Gestão de eventos</div>
							<div><span className="arrow">&#10148;</span>Gestão de inscritos</div>
							<div><span className="arrow">&#10148;</span>Dados financeiros</div>
							<div><span className="arrow">&#10148;</span>Gestão de usuários</div>
						</section>
						

						<section className="attributes">

						</section>

					</div>

				</div>
			</section>
		)
	}
}

export default Eventsys;