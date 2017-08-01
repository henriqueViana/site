import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server'

import Routes from './routes/routes';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/reset-css/reset.css';
import './fonts.css';
import './index.css';
import './pages/default-pages.css';

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
