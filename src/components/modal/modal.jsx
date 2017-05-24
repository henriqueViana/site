import React from 'react';

import './modal.css';

class Modal extends React.Component{

	render() {
		return(

			<section id="init-test" className="alert-modal">

                <div id="alert-body">

                    <h2>Email enviado com sucesso !!!</h2>
                    <br/>
                    <div>Estarei retornando o seu contato o mais breve possível.</div>

                    <div className="content-alert-modal">
                        <br/>
                        <h3><i>Outros contatos</i></h3>
                        
                        <div>
                            <i className="icon-chevron-right" aria-hidden="true"></i> 
                            <i>Tel: 21 99088-4419</i> 
                        </div>

                        <div>
                            <i className="icon-chevron-right" aria-hidden="true"></i> 
                            <i>Tel / Whatsapp: 24 99983-0673</i> 
                        </div>

                        <div>
                            <i className="icon-chevron-right" aria-hidden="true"></i> 
                            <i>Skype: henriquehvisa </i>
                        </div>

                         <div>
                            <i className="icon-chevron-right" aria-hidden="true"></i> 
                            <i>Email: contato@henriqueviana.com.br </i>
                        </div>

                    </div>

                    <a href="">
                        <div className="container-buttons mt-small">
                            <button className="button-green close">Ok</button>
                        </div>
                    </a>
                </div>  
            </section>

		)
	}
}

export default Modal;