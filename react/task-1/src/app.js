import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Hello from './components/Hello';

// Component

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);


// Create element

// const child = React.createElement('p', null, 'Hello, World!!!');
// const root = React.createElement('div', { className: 'hello-element' }, child);
// ReactDOM.render(root, document.getElementById('root'));
