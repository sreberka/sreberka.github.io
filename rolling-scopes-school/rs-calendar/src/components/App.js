import React from 'react';
import Calendar from './Calendar';

class App extends React.Component {
  constructor(props){
    super(props);
    this.changeDate = this.changeDate.bind(this);
    this.state = {
        year: new Date().getFullYear(),
        month: new Date().getMonth()
    };
  }

  changeDate(){
    this.setState({
      year: this.D.getFullYear(),
      month: this.D.getMonth()
    });
   // console.log(this.state)
  };

  render(){
    return <div>
      <button onClick={this.changeDate}>Next</button>
      {console.log('change')}
    <Calendar id ="h2" year = {this.state.year} month = {this.state.month}/>
    </div>
  }
}

export default App;
