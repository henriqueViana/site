import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';

import ResponseContact from '../responseContact/responseContact';


import './contact.css';

class Contact extends React.Component{

	constructor(props){
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}	

	handleSubmit(event){

		event.preventDefault();

		let form = document.querySelector('.form-contact');

		let payload = { 
				name : document.querySelector('.name-form').value ,
				email : document.querySelector('.email-form').value ,
				subject : document.querySelector('.subject-form').value ,
				phone : document.querySelector('.phone-form').value ,
				message : document.querySelector('.message-form').value
		}

		let data = new FormData();

		data.append('dataUser' , JSON.stringify(payload));

		axios.post('/email.php', data)
			.then(res => {
				form.reset();
				toast(<ResponseContact className='success' title='Mensagem enviada com sucesso!' content='Obrigado! Retornarei o seu contato em breve'/>);
				return false;
			})
			.catch(err => toast(<ResponseContact className='error' title='Erro!' content='Erro ao enviar os dados, tente novamente'/>));
		
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
						<InputMask {...this.props} mask="(99) 99999-9999" maskChar=" " type='tel' className="phone-form" id="phone"/>
						{/*<input type="tel" className="phone-form" id="phone" maxLength="15" placeholder="(99) 99999-9999"/>*/}
					</div>

					<div className="box-message">
						<div className="label">Mensagem</div>
						<textarea className="message-form"></textarea>
					</div>

					<input type="submit" value="Enviar mensagem" className="submit"/>
					
				</form>
				
			</section>
		)
	}
}

export default Contact;