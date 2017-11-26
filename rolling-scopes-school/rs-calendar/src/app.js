import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Calendar from './components/Calendar';
import makeRequest from './request';


const request = () => {
  makeRequest('http://128.199.53.150/events').then(function(events){
    makeRequest('http://128.199.53.150/trainers').then(function(trainers){
      initial(events, trainers)
    });
  });
};
const initial = (events, trainers) => {
  ReactDOM.render(
    <Calendar events={events} trainers={trainers} />,
    document.getElementById('root')
  );
};
request();
