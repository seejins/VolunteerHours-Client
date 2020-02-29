import React from 'react';
import ReactDOM from 'react-dom';
import MainEditVolunteer from './MainEditVolunteer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainEditVolunteer />, div);
  ReactDOM.unmountComponentAtNode(div);
});