import React from 'react';

class HelloComponent extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="hello" >
  <p >Hello, world!!!</p>
    <style jsx>{`
          .hello {
            color: blue;
          }
        `}
  </style>
    </div>
  );
  }
}

export default HelloComponent;
