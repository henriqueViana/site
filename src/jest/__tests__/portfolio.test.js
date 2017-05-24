jest.unmock('../../pages/portfolio/portfolio');

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import Portfolio from '../../pages/portfolio/portfolio';

describe('Portfolio', () => {
  
  const checkbox = ReactTestUtils.renderIntoDocument();
  const checkboxNode = ReactDOM.findDOMNode(checkbox);

  //verifica o estado default, que deve ser 'não checado'
  expect(checkboxNode.textContent).toEqual('no checked');

  //Simula um clique e verifica se agora está 'checado'
  ReactTestUtils.Simulate.change(ReactTestUtils.findRenderedDOMComponentWithTag(checkbox,'input'));

  expect(checkboxNode.textContent).toEqual('checked');

});


