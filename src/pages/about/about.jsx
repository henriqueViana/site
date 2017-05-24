import React, { Component } from 'react';
import './about.css';

export default class About extends Component{

	componentDidMount() {
		window.scrollTo(0,0);
  	document.title = "Desenvolvedor Web Freelancer - Henrique Viana";
 	}
	
	render() {
		return(
			<section className="page-services about">
				
				<div className="page">
					<h1>Sobre</h1>
				</div>

				<div className="content">
					<div className="page">
						<div className="box-info">

							<p>
								Olá, me chamo Henrique, sou desenvolvedor web há cerca de 2 anos e desse tempo para 
								cá venho criando soluções web como sites, sistemas e webapps para meus clientes.
							</p><br/>

							<p>
								Procuro estar sempre atento ás novidades tecnologias para poder sempre oferecer um serviço
								de maior qualidade, com aplicações web modernas, interfaces ricas, layout responsivo 
								e uma experiência de uso única.
							</p>  

						</div>

						<div className="box-skills">

							<h3>Skills</h3>

							<div className="inner-box">
								<div className="skill">HTML 5</div>
								<div className="skill">CSS 3</div>
								<div className="skill">Sass</div>
								<div className="skill">Javascript</div>
								<div className="skill">jQuery</div>

								<div className="skill">React JS</div>
								<div className="skill">Redux</div>
								<div className="skill">React Native</div>
								<div className="skill">Wordpress</div>
								<div className="skill">PHP</div>
								<div className="skill">MySQL</div>
							</div>
							

						</div>
					</div>
				</div>
			</section>
		)
	}
}
