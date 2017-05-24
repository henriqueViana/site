import React from 'react';

import CardPageService from '../../components/cardPageService/cardPageService';
import dataCardPageServices from  '../../data/dataCardPageServices';

import './services.css';

class Services extends React.Component{

	constructor(){
		super();
	}

	componentDidMount() {
		window.scrollTo(0,0);
   	document.title = "Criação de sites, Desenvolvimento Wordpress, Desenvolvimento Mobile, Landing Pages";
 	}

	render(){

		return(
			<div className="page page-services">
				<h1 className="title">Serviços</h1>

				<CardPageService 
					title={dataCardPageServices().site.name} 
					content={dataCardPageServices().site.content} 
					nameCard={dataCardPageServices().site.name} 
					image={dataCardPageServices().site.image} 
					logo={dataCardPageServices().site.logo} 
					bgColor={dataCardPageServices().site.bgColor} 
					page={dataCardPageServices().site.url}
				/>

        <CardPageService 
					title={dataCardPageServices().wordpress.name} 
					content={dataCardPageServices().wordpress.content} 
					nameCard={dataCardPageServices().wordpress.name} 
					image={dataCardPageServices().wordpress.image} 
					logo={dataCardPageServices().wordpress.logo} 
					bgColor={dataCardPageServices().wordpress.bgColor} 
					page={dataCardPageServices().wordpress.url}
				/>

        <CardPageService 
					title={dataCardPageServices().front.name} 
					content={dataCardPageServices().front.content} 
					nameCard={dataCardPageServices().front.name} 
					image={dataCardPageServices().front.image} 
					logo={dataCardPageServices().front.logo} 
					bgColor={dataCardPageServices().front.bgColor} 
					page={dataCardPageServices().front.url}
				/>

			</div>
		)
	}
}

export default Services;