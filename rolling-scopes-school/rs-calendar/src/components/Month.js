import React from 'react';

class Month extends React.Component {
  constructor(props){
    super(props);
    this.monthDays = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  }
  render(){
    return <span id="month">{this.monthDays[this.props.dateMonth]} <strong>{this.props.dateYear}</strong>
      <style jsx>{`
         span{
            display: inline-block;
            margin: 0 1.5rem;
            font-size: 2.5rem;
            font-weight: 400;
            min-width: 160px;
            text-align: center;
          }
          strong{
            font-weight: 700;
          }
    `}</style>
    </span>

  }
}

export default Month;
