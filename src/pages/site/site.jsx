import React from 'react';

class Site extends React.Component{

  componentDidMount() {
    window.scrollTo(0,0);
    document.title = "Criação de sites dinâmicos, performáticos, responsivos e que funcionam em qualquer device (smartphones, tablets e smartTVs)";
  }
    
	render(){
		
		return(
			<section className="page-services">

				<div className="banner-single banner-site">
					<div className="banner banner-st"></div>
					<h1 className="banner-title">Sites</h1>
				</div>

				<div className="page">
					<h1 className="title">Criação de Sites</h1>
					<h3 className="subtitle">Apresente seu negócio para o mundo!</h3>
				</div>	
				
				<div className="content">
					<div className="description page">
						<p>
							As vantagens em se ter um site são inúmeras, entre elas, 
							te possibilita uma comunicação direta e eficiente com seus 
							potenciais clientes, eles podem acessar informações detalhadas 
							de seus produtos e serviços, ver fotos, vídeos, depoimentos de 
							clientes satisfeitos e outros detalhes que por fim os ajudam a 
							tomar decisões favoráveis ao seu negócio.

						</p><br/>
						<p>
							Sabendo-se que cada vez mais o primeiro contato entre o cliente e 
							a empresa é feito pelo site, ter uma presença web marcante tem que 
							fazer parte da estratégia da empresa e o desenvolvimento de um site 
							institucional faz parte desse processo.
						</p><br/>
						<p>
							A construção do site tem como foco o usuário a fim de proporcionar 
							uma experiência única para o usuário. Com uma navegação simples e 
							com poucos cliques, o cliente encontra o que procura em seu site, 
							aumentando assim o seu índice de conversão.
						</p>
					</div>
				</div>
			</section>
		)	
	}
}

export default Site;