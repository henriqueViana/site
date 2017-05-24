import React from 'react';
import AjaxMail from '../ajaxMail/ajaxMail';

import './contact.css';

class Contact extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			'name' : null , 
			'email' : null , 
			'subject' : null , 
			'phone' : null , 
			'message' : null
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}	

	resetState() {
		this.setState({
			...this.state ,
			name : null , 
			email : null , 
			subject : null , 
			phone : null , 
			message : null
		});
	}

	handleSubmit(event){

		event.preventDefault();

		this.setState(
			{	
				...this.state,
				name : document.querySelector('.name-form').value ,
				email : document.querySelector('.email-form').value ,
				subject : document.querySelector('.subject-form').value ,
				phone : document.querySelector('.phone-form').value ,
				message : document.querySelector('.message-form').value
			}
		);
	}

	render(){
		return(

			<section className="contact-component">
				<form onSubmit={this.handleSubmit} className="form-contact page">
					
					<h2 className="title">Entre em contato e solicite um orçamento !</h2>
					<p><i>Se preferir, preencha apenas o seu email para receber mais informações</i></p>

					<div className="box-name boxes">
						<div className="label">Nome</div>
						<input type="text" className="name-form" placeholder="Digite aqui o seu nome"/>
					</div>

					<div className="box-email boxes">
						<div className="label">Email<span className="required"> * </span></div>
						<input type="email" className="email-form" placeholder="Digite aqui o seu email (obrigatório)" required/>
					</div>

					<div className="box-subject boxes">
						<div className="label">Assunto</div>
						<input type="text" className="subject-form" placeholder="Digite aqui o assunto"/>
					</div>

					<div className="box-phone boxes">
						<div className="label">Telefone</div>
						<input type="tel" className="phone-form" id="phone" maxLength="15" placeholder="(99) 99999-9999"/>
					</div>

					<div className="box-message">
						<div className="label">Mensagem</div>
						<textarea className="message-form"></textarea>
					</div>

					<input type="submit" value="Enviar mensagem" className="submit"/>
					
				</form>

				{(this.state.email) ? <AjaxMail name={this.state.name} email={this.state.email} subject={this.state.subject} phone={this.state.phone} message={this.state.message} /> : ''}
				
			</section>
		)
	}
}

export default Contact;