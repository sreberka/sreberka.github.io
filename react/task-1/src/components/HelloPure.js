import React from 'react';

class HelloPure extends React.PureComponent {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="hello" >
        <p >Hello, world!!!</p>
        <style jsx>{`
          .hello {
            color: red;
          }
        `}
        </style>
      </div>
    );
  }
}

export default HelloPure;
