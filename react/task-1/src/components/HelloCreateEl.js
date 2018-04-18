import React from 'react';

const HelloCreateEl = React.createClass({
  render: function() {
    const child = React.createElement('p', null, 'Hello, World!!!');
    return React.createElement('div', { className: 'hello-element' }, child);
  }
});

export default HelloCreateEl;
