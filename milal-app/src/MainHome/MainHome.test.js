import React from 'react';
import ReactDOM from 'react-dom';
import MainHome from './MainHome';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainHome />, div);
  ReactDOM.unmountComponentAtNode(div);
});