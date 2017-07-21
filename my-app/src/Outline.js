import React, { Component } from 'react';
import './Outline.css';


class Outline extends Component {
  _getEvents(eventsList, date) {
    return eventsList.map((event) => {
      if (event.date == date){
      return (
          <li key={event.id} className="group"><span className="hour"> {event.hour} </span> {event.title} </li>
      )}
    })
  }

  render() {
    let events = this._getEvents(this.props.events, this.props.date);
    return (
      <div className="card">
        <p className="date"> {this.props.date} </p>
        <ul>
            {events}
        </ul>
      </div>
    )
  }
}

export default Outline;
