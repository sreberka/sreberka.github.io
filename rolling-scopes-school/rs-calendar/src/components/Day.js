import React from 'react';
import Event from './Event'


class Day extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let obj = this.props.event;
    let events = [];
    obj.map(item=> events.push(item.start.slice(0,10)));
    let filter = obj.filter(item => item.start.slice(0,10) === this.props.date);
    if(filter.length > 0){
      return <div className={'item ' + (this.props.name === new Date().getDate() &&
      this.props.yearNow === new Date().getFullYear() &&
      this.props.monthNow === new Date().getMonth()
        ? 'today' : (this.props.name === '') ? 'empty' : '')}>
        <p>{this.props.name}</p>
        {filter.map((index) => (
          <Event key={index.title} type = {index.type}
                 time = {index.start.slice(11).slice(0,5)}
                 title = {index.title}
                 date = {index.start}
                 description = {index.description}
                 duration = {index.duration}
                 location = {index.location}
                 speakers = {index.speakers}
                 resources = {index.resources}
                 trainers = {this.props.trainer}
          />
        ))}

        <style jsx>{`
          .item{
            width: 13.25%;
            min-height: 3.1rem;
            background: #fff;
            border-radius: 5px;
            margin: 0.5%;
            padding: 1rem;
            font-size: 2rem;
            text-align: center;
          }
          @media screen and (max-width: 500px){
            .item{
              padding: 0.5rem;
            }
          }
          .today{
            color: red;
            font-weight: bold;
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
          }
          .empty{
            background: transparent;
          }
        `}
        </style>
      </div>;
    }
    else{
      return <div className={'item ' + (this.props.name === new Date().getDate() &&
      this.props.yearNow === new Date().getFullYear() &&
      this.props.monthNow === new Date().getMonth()
        ? 'today' : (this.props.name === '') ? 'empty' : '')}>
        <p>{this.props.name}</p>

        <style jsx>{`
          .item{
            position: relative;
            width: 13.25%;
            min-height: 3.1rem;
            background: #fff;
            border-radius: 5px;
            margin: 0.5%;
            padding: 1rem;
            font-size: 2rem;
            text-align: center;
          }
          .today{
            color: red;
            font-weight: bold;
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
          }
          .empty{
            background: transparent;
          }
        `}
        </style>
      </div>;
    }


  }
}

export default Day;
