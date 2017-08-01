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
					logo={dataCardPageServices().site.logo} 
					page={dataCardPageServices().site.url}
					index='1'
				/>

        <CardPageService 
					title={dataCardPageServices().wordpress.name} 
					content={dataCardPageServices().wordpress.content} 
					nameCard={dataCardPageServices().wordpress.name} 
					logo={dataCardPageServices().wordpress.logo} 
					page={dataCardPageServices().wordpress.url}
					index='2'
				/>

        <CardPageService 
					title={dataCardPageServices().front.name} 
					content={dataCardPageServices().front.content} 
					nameCard={dataCardPageServices().front.name} 
					logo={dataCardPageServices().front.logo} 
					page={dataCardPageServices().front.url}
					index='3'
				/>

				<CardPageService 
					title={dataCardPageServices().landing.name} 
					content={dataCardPageServices().landing.content} 
					nameCard={dataCardPageServices().landing.name} 
					logo={dataCardPageServices().landing.logo} 
					page={dataCardPageServices().landing.url}
					index='4'
				/>

			</div>
		)
	}
}

export default Services;