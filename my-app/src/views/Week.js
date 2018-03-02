import React, { Component } from 'react';
import Outline from '../dynamic/Outline.js'
import Filters from '../dynamic/Filters.js'
import Dates from '../dynamic/Dates.js'
import DateScheduler from '../helpers'
import * as firebase from 'firebase';
import './Week.css';

class Week extends Component {


  constructor(){
    super();
    this.state = {
      events: ""
    }
  }

  componentDidMount(){
    const eventsRef = firebase.database().ref()

    eventsRef.on('value', snap => {
      this.setState({
        events: snap.val()
      })
    })
  }

  render() {
    
    const day = new DateScheduler.DateScheduler;

    return (
      <div>
        <Filters />
        <Dates monday={day.monday} friday={day.friday}/>
        <Outline events={this.state.events} date={day.monday}/>
        <Outline events={this.state.events} date={day.tuesday}/>
        <Outline events={this.state.events} date={day.wednesday}/>
        <Outline events={this.state.events} date={day.thursday}/>
        <Outline events={this.state.events} date={day.friday}/>
			</div>
    );
  }
}

export default Week;
