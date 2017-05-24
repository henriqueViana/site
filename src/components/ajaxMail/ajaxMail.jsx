import React from 'react';
import Modal from '../../lib/modal';
import ResponseContact from '../responseContact/responseContact';


class AjaxMail extends React.Component{

	constructor(props){
		super(props);
		this.sendContact;

		//this.modal = new Modal();
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

		fetch('/email.php' , {
			method : 'POST' ,
			body : data
		})
		.then((response) => response.json())
		.then((data) => {
			if(data){
				form.reset();
			 // this.modal.open('init-test');
				return false;
			}
		})
		.catch((error) => console.log(error));
	}

	render(){
		this.sendContact();
		
		return(
			<div><ResponseContact /></div>
		)
	}
}

export default AjaxMail;