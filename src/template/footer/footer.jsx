import React from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../../assets/img/logo_white.png'

import './footer.css';

export default props => (
  <footer className="footer">
			
    <div className='box-logo-footer'>
      <Link to='/'><img src={logoWhite} className='logo-footer' alt='Logo do Rodapé'/> </Link>
      <p>Desenvolvedor Web</p>
    </div>

    <div className="box-map">
      <p className="title-box">Serviços</p>
      <Link to='/servicos/site'><p>Criação de Sites</p></Link>
      <Link to='/servicos/wordpress'><p>Sistemas em Wordpress</p></Link>
      <p>Landing Pages</p>
      <Link to='/servicos/frontend'><p>Codificação Front End</p></Link>
      <Link to='/servicos/aplicativos'><p>Aplicativos</p></Link>
    </div>

    <div className='info-contact'>
      <p className="title-box">Contatos</p>
      <p><i className="fa fa-mobile" aria-hidden="true"></i>55 21 99088-4419</p>
      <p><i className="fa fa-whatsapp" aria-hidden="true"></i>55 24 99983-0673 / Whatsapp</p>
      <p><i className="fa fa-envelope" aria-hidden="true"></i>contato@henriqueviana.com.br</p>
    </div>
  
  </footer>
)
