import React from 'react';
import ReactDOM from 'react-dom';
import Volunteer from './Volunteer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Volunteer />, div);
  ReactDOM.unmountComponentAtNode(div);
});