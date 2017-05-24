import React from 'react';
import sr from '../../scrollReveal';

import app1 from '../../assets/img/portfolio/acquaclass_app.jpg';
import logoAcquaclass from '../../assets/img/portfolio/logo_acquaclass.png';

class AcquaclassApp extends React.Component{

	constructor(props){
		super(props);
		window.scrollTo(0,0);
	}

	componentDidMount() {
  	document.title = "Projeto de criação de aplicativo para a empresa Acquaclass";
	
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
		return(
			<section className="inner-portfolio">

				<section className='container-slide'>
					<div className='mask'>
						<div className='inner-mask'>
							<img src={logoAcquaclass} className="logo-portfolio" alt="Logo Acquaclass"/>
							<div className='service'><span>Serviço: </span>Desenvolvimento de App</div>
							<div className='service'><span>Produto: </span>Aplicativo</div>
							<div className='service'><span>Tecnologias: </span>HTML, CSS, JavaScript, Ionic, SQLite</div>
						</div>
					</div>
					<img src={app1} className="img-portfolio" alt="Imagem portfólio Iplantão"/>

				</section>
				<div className="page">
					<h1 className="title">Projeto Acquaclass App</h1>
					<h3 className="subtitle">
						Aplicativo
					</h3>
				</div>

				<div className="content">
				
					<div className="page" ref='boxContent'>
						<section className="description">
							<div className='line'>
								Aplicativo desenvolvido para a empresa Acquaclass para auxiliar nas aferições
								feitas junto á seus clientes.
							</div>
							<br/>
							<div className='line'>
								Para atender as necessidades do cliente, foram desenvolvidas as seguintes funcionalidades:
							</div>
							<div><span className="arrow">&#10148;</span>Manipulação de contas de clientes</div>
								<div><span className="arrow">&#10148;</span>Inserção de dados</div>
								<div><span className="arrow">&#10148;</span>Cálculo de valores de contas</div>
								<div><span className="arrow">&#10148;</span>Histórico de contas</div>
								<div><span className="arrow">&#10148;</span>Relatório de consumo hídrico</div>
						</section>
					
						<section className="attributes">
						</section>

					</div>
				</div>
			</section>
		)
	}
}

export default AcquaclassApp;