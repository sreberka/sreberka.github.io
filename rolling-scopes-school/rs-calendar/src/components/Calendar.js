import React from 'react';
import Day from './Day';
import Week from './Week';
import Month from './Month';


class Calendar extends React.Component {
  constructor(props){
    super(props);
    this.empty = [];
    this.items = [];
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);

    this.state = {
      month: new Date().getMonth(),
      year: new Date().getFullYear()
    };

  }

  renderEmptyItems(){
    if(this.DNfirst != 0){
      this.empty = Array.from({ length: this.DNfirst - 1 }, (v, k) => k+1);
    }
    else{
      this.empty = Array.from({ length: 6 }, (v, k) => k+1);
    }
  }

  renderItems(){
    this.items = Array.from({ length: this.Dlast }, (v, k) => k+1)
  }

  nextMonth(){
    this.setState({
      month: this.D.getMonth() + 1,
      year: this.D.getFullYear()
    });
  }

  prevMonth(){
    this.setState({
      month: this.D.getMonth() - 1,
      year: this.D.getFullYear()
    });
  }

  render() {
    this.Dlast = new Date(this.state.year,this.state.month+1,0).getDate();
    this.D = new Date(this.state.year,this.state.month,this.Dlast);
    this.DNfirst = new Date(this.D.getFullYear(),this.D.getMonth(),1).getDay();
    //console.log(this.props.trainers);
    return (
    <div>
      <div className="month">
        <button className="fa fa-chevron-left" onClick={this.prevMonth}>Previous Month</button>
        <Month dateMonth={this.D.getMonth()} dateYear={this.D.getFullYear()} />
        <button className="fa fa-chevron-right" onClick={this.nextMonth}>Next Month</button>
        <style jsx>{`
          .month{
            text-align: right;
          }
          .month button{
            border: none;
            background: transparent;
            font-size: 0;
          }
          .month button:before{
            font-size: 2rem;
            cursor: pointer;
          }
          .month button:hover{
            opacity: 0.5;
          }
        `}
        </style>
      </div>
        <Week />
      <div className="calendar">
        {this.renderEmptyItems()}
        {this.renderItems()}
        {this.empty.map((index) => (
          <Day trainer = {this.props.trainers} event = {this.props.events} key={index} name = '' monthNow = {this.state.month} yearNow = {this.state.year} />
        ))}
        {this.items.map((index) => (
          <Day trainer = {this.props.trainers} 
               event = {this.props.events} 
               date={this.state.year + '-' + (this.state.month + 1 < 10 ? '0' + (this.state.month + 1) : this.state.month + 1) + '-' + (index < 10 ? '0' + index : index)} 
               key={index} 
               name = {index} 
               monthNow = {this.state.month}
               yearNow = {this.state.year} />
        ))}

        <style jsx>{`
          .calendar{
            display: flex;
            flex-flow: row wrap;
            justify-content: flex-start;
            align-items: stretch;
          }
        `}</style>
      </div>
    </div>

    );
  }
}

export default Calendar;




