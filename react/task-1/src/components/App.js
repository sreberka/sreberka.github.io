import React from 'react';
import HelloComponent from './HelloComponent';
import HelloCreateEl from './HelloCreateEl';
import HelloPure from './HelloPure';
import HelloFunc from './HelloFunc';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <HelloComponent />
        <HelloCreateEl />
        <HelloPure />
        <HelloFunc />
      </div>
    )
  }
}

export default App;
