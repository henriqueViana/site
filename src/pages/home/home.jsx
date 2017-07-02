import React, { Component } from 'react';

import Cover from '../../components/cover/cover';
import CardServices from '../../components/cardServices/cardServices';
import dataCardServices from '../../data/dataCardServices';
import Portfolio from '../../components/portfolio/portfolio';
import logo from '../../assets/img/logo.png'; 

import './home.css';

import sr from '../../scrollReveal';

class Home extends Component{

  constructor(props) {
    super(props);
    window.scrollTo(0,0);

  }

  componentDidMount() {
    const config = {
      origin: 'bottom',
      duration: 700,
      delay: 200,
      distance: '100px',
      scale: 1,
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    }

    sr.reveal(this.refs.boxEfects, config)
  }

  render(){
    return(
      <section>
        <div className='init-cover absolute-middle'>
          <div className='absolute-middle'>
            <img src={logo} className='header-logo' alt='Logo'/>
            <div className='bar'></div>
          </div>
        </div>
        <div className='home'>
          <Cover />
          <div className='page'>

            <div className='box-title' ref='boxEfects'>
              <h2 className="sub-title">Serviços</h2>
              <div className='line-title'></div>
            </div>

            <div className='container-cards' ref='boxEfects'>
              {dataCardServices.map((data , i) => {
                return (
                  <CardServices 
                    name={data.name} 
                    imageSrc={data.imageSrc} 
                    content={data.content} 
                    labelButton={data.labelButton} 
                    linkTo={data.linkTo} 
                    bgImageBox={data.bgImageBox} 
                    key={i}
                  />
                )
              })}
            </div>

            <div className='box-title portfolio'>
              <h2 className="sub-title">Portfólio</h2>
              <div className='line-title'></div>
            </div>
            <Portfolio />
          </div>
        </div>
      </section>
    )
  }
}

export default Home;