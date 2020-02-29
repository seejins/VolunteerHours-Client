import React from 'react';
import ReactDOM from 'react-dom';
import MainLanding from './MainLanding';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainLanding />, div);
  ReactDOM.unmountComponentAtNode(div);
});