import React, { Component } from 'react';
import Link from 'react-router-dom/link';

class Outline extends Component {
  // parses all event and returns if equal to current Component's date
  _getEvents(eventsList, date) {
    return eventsList.map((event) => {
      if (event.date == date){
      return (
          <li key={event.id} className={`group ` + event.category}><span className="hour"> {event.hour} </span> {event.title} </li>
      )}
    })
  }

  render() {
    let events = this._getEvents(this.props.events, this.props.date);
    return (
      <div className="card">
      <Link to={`/d/${this.props.date}`} params={{ day: this.props.date }}>
        <p className="date"> {this.props.date} </p>
        <ul>
            {events}
        </ul>
      </Link>
      </div>
    )
  }
}

export default Outline;
