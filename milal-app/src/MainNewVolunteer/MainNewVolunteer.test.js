import React from 'react';
import ReactDOM from 'react-dom';
import MainNewVolunteer from './MainNewVolunteer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainNewVolunteer />, div);
  ReactDOM.unmountComponentAtNode(div);
});