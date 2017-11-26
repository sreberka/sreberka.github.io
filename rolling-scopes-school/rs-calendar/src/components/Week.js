import React from 'react';

class Week extends React.Component {
  constructor(props){
    super(props);
    this.weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  }
  render(){
    return <div className="week">
      {this.weekDays.map((index) => (
      <div key={index} className="week-item">{index}</div>
      ))}
      <style jsx>{`
          .week{
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
          }
          .week-item{
            position: relative;
            width: 13.25%;
            min-height: 3.1rem;
            background: #585858;
            color: #cccccc;
            border-radius: 5px;
            margin: 0.5%;
            padding: 1rem;
            font-size: 2rem;
            text-align: center;
          }
        `}
      </style>
    </div>;
  }
}

export default Week;
