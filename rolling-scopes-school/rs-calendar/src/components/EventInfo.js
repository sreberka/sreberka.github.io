import React from 'react';

class EventInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    //console.log(this.props.eventTrainers);
    const that = this;
    return <div className="event-info"><span onClick={this.props.close} className="close fa fa-times">&nbsp;</span>
      <h2>{this.props.eventTitle}</h2>
      <h3 className="date-start">{this.props.eventDate.slice(0,10)} <strong>{this.props.eventDate.slice(11).slice(0,5)}</strong></h3>
      <p>{this.props.eventDescription}</p>
      <h3>Duration: </h3>
        <p><strong>{new Date(this.props.eventDuration).toUTCString().split(/ /)[4].slice(0,2)}</strong>h
          <strong>{new Date(this.props.eventDuration).toUTCString().split(/ /)[4].slice(3,5)}</strong>min
        </p>
      <h3>Location:</h3>
      <p>
        {this.props.eventLocation}
        <a href={"https://www.google.ru/maps/search/" + this.props.eventLocation.split(' ').join('+')} target="_blank"> open google map</a>
      </p>
      <h3>Speakers: </h3>
      <div className="speakers">{this.props.eventSpeakers.map(function(index){
        let trainer = that.props.eventTrainers.filter(item => item.id === index);
        return <div className="speaker" key={index}><span className="speakerImage"><img src={trainer[0].avatar}/></span><span>{trainer[0].name}</span></div>
      })}
      </div>
      <h3>Resources: </h3>
      {this.props.eventResources.map(index => <div className="resource-description" key={index.description}>
        <p><strong>Type: </strong>{index.type}</p>
        <p><strong>Description: </strong>{index.description}</p>
        <p><strong>Resource: </strong><a href={index.resource} target="_blank">{index.resource}</a></p>
      </div>)}
      <style jsx>{`
          h2{
            font-size: 4rem;
            text-transform: capitalize;
            text-align: center;
           }
           h3{
             margin-top: 1rem;
           }
           a{
            font-style: italic;
           }
           .date-start{
             margin-top: 1rem;
             margin-bottom: 2rem;
             font-size: 3rem;
             text-decoration: underline;
             text-align: center;
           }
          .event-info{
            position: absolute;
            left: 10%;
            top: 10%;
            z-index: 2;
            width: 80%;
            min-height: 500px;
            max-height: 75%;
            padding: 2rem;
            text-align: left;
            color: #333;
            border: 1px solid #252525;
            background: #fff;
            overflow: auto;
          }
          .close{
            cursor: pointer;
            position: absolute;
            top: 5px;
            right: 5px;
          }
          .close:hover{
            opacity: 0.7;
          }
          .speaker{
            margin: 5px 0;
          }
          .speaker span{
            display: inline-block;
            vertical-align: middle;
          }
          .speakerImage{
            width: 10rem;
            height: 10rem;
            border-radius: 100%;
            overflow: hidden;
            margin-right: 3rem
          }
          .speakerImage img{
            height: 100%;
          }
          .resource-description{
            padding: 5px 0;
            border-bottom: 1px solid #d3d3d3;
          }

        `}
      </style>
    </div>
  }
}

export default EventInfo;
