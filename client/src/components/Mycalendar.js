import React, { Component } from 'react';
import Calendar from 'react-calendar';
 
class Mycalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }
    this.selectDate = this.selectDate.bind(this);
  }
  
  onChange = date => {
    this.setState({ date });
    //alert(this.state.date);

  }
  selectDate = ()=>{
    alert(this.state.date);
  }
 
  render() {
    return (
      <div className="calenderContainer">
        <h2 className="calendarH2">Select a JHMA session you want to attend</h2>
        <div>
        <button className="waves-effect waves-light btn cbtn" onClick={this.selectDate}>
          Confirm Date
        </button>
        </div>
        <Calendar className="calendar"
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default Mycalendar;