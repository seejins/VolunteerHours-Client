import React from 'react';
import ReactDOM from 'react-dom';
import NavLanding from './NavLanding';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavLanding />, div);
  ReactDOM.unmountComponentAtNode(div);
});