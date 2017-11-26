import React from 'react';
import EventInfo from './EventInfo';


class Event extends React.Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
    this.state = {
      isOpened: false
    };
  }

  _handleClick(){
    this.setState({
      isOpened: !this.state.isOpened
    });
  }

  _renderDetails() {
    if(!this.state.isOpened) return null;
    return (
      <EventInfo close = {this._handleClick}
                 eventTitle = {this.props.title}
                 eventDate = {this.props.date}
                 eventDescription = {this.props.description}
                 eventDuration = {this.props.duration}
                 eventLocation = {this.props.location}
                 eventSpeakers = {this.props.speakers}
                 eventResources = {this.props.resources}
                 eventTrainers = {this.props.trainers}
      />
    )
  }

  render(){
    return <div><button onClick={this._handleClick} className={(this.props.type === "lecture") ? 'lecture' : (this.props.type === "deadline") ? 'deadLine' : (this.props.type === "webinar") ? 'webinar' : (this.props.type === "event") ? 'event' : 'workshop'} >{this.props.time}
      <style jsx>{`
          button{
            width: 100%;
            padding: 5px 0;
            margin-top: 5px;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 2rem;
            font-weight: 700;
            cursor: pointer;
          }
          @media screen and (max-width: 500px){
            button{
              font-size: 1.5rem;
            }
          }
          .lecture{
            background: #00c853;
          }
          .lecture:hover{
            background: #006229;
          }
          .deadLine{
            background: #f44336;
          }
          .deadLine:hover{
            background: #ba160a;
          }
          .webinar{
            background: #29b6f6;
          }
          .webinar:hover{
            background: #0288d1;
          }
          .event{
            background: #ffa726;
          }
          .event:hover{
            background: #f57c00;
          }
          .workshop{
            background: #9575cd;
          }
          .workshop:hover{
            background: #5e35b1;
          }
        `}
      </style>
    </button>
    {this._renderDetails()}
    </div>
  }
}

export default Event;
