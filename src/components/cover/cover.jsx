import React from 'react';

import bgHome from '../../assets/img/bg.jpg';
import './cover.css';

export default props => (
  <section className='init-content'>
    <div className="first-container">
      <div className="container-photo">
        <div className="bg-home">
          <img src={bgHome} alt="Banner da Home" />
        </div>
      </div>

      <div className="home-message absolute-middle" >
        <div className="message-1 messages absolute-middle">
          <div className="test-box"><h2 className="title">Desenvolvimento Wordpress</h2></div>
          <div className="test-box"><p className="description">Customização e criação de temas , blogs e tudo mais que se pode fazer com Wordpress</p></div>
        </div>

          <div className="message-2 messages absolute-middle">
            <div className="test-box"><h2 className="title">Desenvolvimento Web</h2></div>
            <div className="test-box"><p className="description"> Criação de Sites institucionais, sistemas, portais, hotsite e landing pages</p></div>
          </div>

          <div className="message-3 messages absolute-middle">
            <div className="test-box"><h2 className="title">Aplicativos Mobile</h2></div>
            <div className="test-box"><p className="description">Criação de aplicativos com Ionic para as plataformas Android e Windows Phone</p></div>
          </div>
        </div>
      </div>
    </section>
)