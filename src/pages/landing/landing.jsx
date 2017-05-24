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
					<h3>Sua estratégia de Marketing Digital precisa de uma Landing Page</h3>
				</div>
			</section>
		)
	}
}

export default Landing;