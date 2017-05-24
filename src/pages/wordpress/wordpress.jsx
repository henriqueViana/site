import React from 'react';

class Wordpress extends React.Component{

	componentDidMount() {
		window.scrollTo(0,0);
   	document.title = "Criação de sites em Wordpress, desenvolvimento de temas, shortcodes, plugin, custom post type entre outros";
  }

	render(){
		return(
			<section className="page-services">

				<div className="banner-single banner-wordpress">
					<div className="banner banner-wp"></div>
					<h1 className="banner-title">WordPress</h1>
				</div>

				<div className="page">
					<h1 className="title">Wordpress</h1>
					<h3 className="subtitle">
						De pequenos blogs pessoais à grandes portais e sistemas web. 
						<br/>
						com o Wordpress é possível.
					</h3>
				</div>

				<div className="content">
					<div className="description page">

						<p>
							Publicar conteúdos de maneira fácil e sem conhecimentos técnicos, 
							esse é o principal objetivo da plataforma Wordpress, que oferece uma 
							extensa quantidade de funcionalidade para seus usuários a partir de 
							um Painel Administrativo simples de se usar.
						</p><br/>
						<p>
							Por ser um projeto Open Source (Código Livre) , possui uma infinidade 
							de temas, módulos e plugins gratuitos, possibilitando assim, integrar 
							qualquer tipo de funcionalidade que possa otimizar o seu site.
						</p>

					</div>
				</div>
				
			</section>
		)
	}
}

export default Wordpress;