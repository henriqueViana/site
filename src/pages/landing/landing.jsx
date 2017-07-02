import React, { Component } from 'react';

class Landing extends Component{

	componentDidMount() {
		window.scrollTo(0,0);
    document.title = "Crie sua landing page e alavanque a sua estratégia de marketing digital";
  }
	
	render(){
		return(
			<section className="page-services">
				<div className="banner-single banner-landing">
					<div className="banner banner-lp"></div>
					<h1 className="banner-title">Landing page</h1>
				</div>

				<div className="page">
					<h1 className="title">Landing Page</h1>
					<h3 className='subtitle'>Transforme os seus visitantes em leads e aumente as suas vendas.</h3>
				</div>

				<div className="content">
					<div className="description page">
						<p>
							As Landing Pages são páginas únicas que divulgam seu produto ou serviço anunciado-os de forma clara e eficiente, são essenciais para gerar novos leads para o seu negócio. A partir delas é possível coletar imformações relevantes dos visitantes e os transformando em oportunidades de negócio.
						</p>
					</div>
				</div>
			</section>
		)
	}
}

export default Landing;