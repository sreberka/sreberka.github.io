import React from 'react';

class BlogItem extends React.Component {
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

export default BlogItem;
