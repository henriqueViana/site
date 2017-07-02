import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import ResponseContact from '../responseContact/responseContact';

class AjaxMail extends React.Component{

	constructor(props){
		super(props);
		this.sendContact;
	}

	sendContact(){

		let form = document.querySelector('.form-contact');

		let payload = { 
			name : this.props.name , 
			email : this.props.email ,
			subject : this.props.subject , 
			phone : this.props.phone , 
			message : this.props.message
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
		this.sendContact();
		
		return(
			<div></div>
		)
	}
}

export default AjaxMail;