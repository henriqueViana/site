import React from 'react';

import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';

import Header from '../template/header/header';
import Footer from '../template/footer/footer';
import Modal from '../components/modal/modal';
import Contact from '../components/contact/contact';

import Home from '../pages/home/home';
import About from '../pages/about/about';
import Portfolio from '../pages/portfolio/portfolio';
import Services from '../pages/services/services';
import ContactPage from '../pages/contact/contact';
import Site from '../pages/site/site';
import Wordpress from '../pages/wordpress/wordpress';
import FrontEnd from '../pages/frontend/frontend';
import Landing from '../pages/landing/landing';
import Iplantao from '../pages/iplantao/iplantao';
import Acquaclass from '../pages/acquaclass/acquaclass';
import AcquaclassApp from '../pages/acquaclassApp/acquaclassApp';
import Eventsys from '../pages/eventsys/eventsys';
import Impa from '../pages/impa/impa';

import '../../node_modules/react-toastify/dist/ReactToastify.min.css'; 

export default props => (
  <BrowserRouter>
    <Switch>
    <div className="wrapper">
      <Header />
      <Route exact path='/' component={Home} />
      <Route exact path='/sobre' component={About} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route exact path='/servicos' component={Services} />
      <Route exact path='/contato' component={ContactPage} />
      <Route exact path='/servicos/site' component={Site} />
      <Route exact path='/servicos/wordpress' component={Wordpress} />
      <Route exact path='/servicos/frontend' component={FrontEnd} />
      <Route exact path='/servicos/landing' component={Landing} />
      <Route exact path='/portfolio/iplantao' component={Iplantao} />
      <Route exact path='/portfolio/acquaclass' component={Acquaclass} />
      <Route exact path='/portfolio/acquaclass-app' component={AcquaclassApp} />
      <Route exact path='/portfolio/eventsys' component={Eventsys} />
      <Route exact path='/portfolio/impa' component={Impa} />
      <Modal />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
    </Switch>
  </BrowserRouter>
)
