import React from 'react';
import ReactDOM from 'react-dom';
import NavHome from './NavHome';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavHome />, div);
  ReactDOM.unmountComponentAtNode(div);
});