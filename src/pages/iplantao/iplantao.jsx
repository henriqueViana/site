import React from 'react';
import Slider from 'react-slick';
import sr from '../../scrollReveal';

import '../default-portfolio.css';

import iplantao1 from '../../assets/img/portfolio/iplantao1.jpg';
import iplantao2 from '../../assets/img/portfolio/iplantao2.jpg';
import iplantao3 from '../../assets/img/portfolio/iplantao3.jpg';
import iplantao4 from '../../assets/img/portfolio/iplantao4.jpg';
import iplantao5 from '../../assets/img/portfolio/iplantao5.jpg';
import iplantao6 from '../../assets/img/portfolio/iplantao6.jpg';
import iplantao7 from '../../assets/img/portfolio/iplantao7.jpg';
import logoIplantao from '../../assets/img/portfolio/logo_iplantao.png';


class Iplantao extends React.Component{
	
	constructor(props){
		super(props);
		window.scrollTo(0,0);
	}

	componentDidMount() {
   	document.title = "Projeto de criação de site e sistema para a empresa Iplantão";

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
			<section className="inner-portfolio" >

				<section className='container-slide'>
					<div className='mask'>

						<div className='inner-mask'>
							<img src={logoIplantao} className="logo-portfolio" alt="Logo Iplantão"/>
							<div className='service'><span>Serviço: </span>Desenvolvimento Web</div>
							<div className='service'><span>Produto: </span>Site & Sistema Web</div>
							<div className='service'><span>Tecnologias: </span>HTML, CSS, JavaScript, jQuery, PHP, PostgreSQL</div>
						</div>
					</div>

					<Slider {...settings}>
						<img src={iplantao3} className="img-portfolio" alt="Imagem portfólio Iplantão"/>
						<img src={iplantao4} className="img-portfolio" alt="Imagem portfólio Iplantão"/>
						<img src={iplantao5} className="img-portfolio" alt="Imagem portfólio Iplantão"/>
						<img src={iplantao6} className="img-portfolio" alt="Imagem portfólio Iplantão"/>
						<img src={iplantao7} className="img-portfolio" alt="Imagem portfólio Iplantão"/>
					</Slider>

				</section>
				
				<div className="page">
					<h1 className="title">Projeto Iplantão</h1>
					<h3 className="subtitle">
						Desenvolvimento de site institucional e sistema web
					</h3>
				</div>

				<div className="content">

					<div className="page" ref='boxContent'>
						<section className="description">
							
							<div className="line">
								O Iplantão é um sistema de gestão de escalas médicas ao qual o cliente consegue
								gerir toda a sua equipe de forma fácil e bastante simples.
							</div>
							<div className="line">
								O sistema atende uma das principais dificuldades que um gestor hospitalar enfrenta
								no seu dia a dia que é controlar os plantões médicos.
							</div>
							<br/>
							<div className='line'>
								Para atender as necessidades do cliente, foram desenvolvidas as seguintes funcionalidades:
							</div>
							
							<div><span className="arrow">&#10148;</span>Criação e definição de escalas</div>
							<div><span className="arrow">&#10148;</span>Definição de equipe e plantões</div>
							<div><span className="arrow">&#10148;</span>Histórico de ações</div>
							<div><span className="arrow">&#10148;</span>Relatório de pagamentos</div>
							<div><span className="arrow">&#10148;</span>Relatório de turnos trabalhados</div>
						</section>

						<section className="attributes" >
						
						</section>

						<div className="box-button">
							<a href="https://www.iplantao.com.br" target="_blank"><button>Conheça o sistema</button></a>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Iplantao;