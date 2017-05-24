import React from 'react';

class FrontEnd extends React.Component{

	componentDidMount() {
		window.scrollTo(0,0);
   	document.title = "Codificação Front-End, PSD para HTML, web components e muito mais";
  }
	
	render(){
		return(
			<section className="page-services">
				<div className="banner-single banner-front">
					<div className="banner banner-fe"></div>
					<h1 className="banner-title">Front-End</h1>
				</div>
				<div className="page">
					<h1 className="title">Front End</h1>
					<h3>Transformando layouts em códigos</h3>
				</div>
				<div className="content">
					<div className="description page">
						<p>
							Serviço voltado para designers freelancer e agências. Profissionais 
							que produzem todo o layout, mas precisam de uma mãozinha na hora da 
							codificação.
						</p><br/>
						<p>
							O serviço de codificação de layouts (front-end) é oferecido á partir 
							de um layout que já foi criado. Seja ele feito em Photoshop, Fireworks, 
							Illustrator ou em qualquer outro software gráfico que você utilize. 
							Esse layout é “fatiado” e transformado em código HTML 5, CSS 3 e JavaScript, 
							e sendo necessário, utilizo de bibliotecas e frameworks como Bootstrap, Angular ou React, 
							a fim de produzir um código	mais robusto.
						</p><br/>
						<p>
							Tudo isso sem deixar de seguir as orientações e especificações técnicas 
							desenvolvidas pela <a href="http://www.w3c.br/Home/WebHome">W3C</a>.
						</p>
					</div>
				</div>
				
			</section>
		)
	}
}

export default FrontEnd;