import React, { Component } from 'react';

class Event extends Component {
  // parses all event and returns if equal to current Component's date
  _getEvents(eventsList) {
    return eventsList.map((event) => {
      return (
        <div className="card">
          <p className="date"> {event.title} </p>
          <p><span className="hour"> Hour: {event.hour} </span></p>
          <p>{event.description}</p>
          <p><span className="filter">Follow</span></p>
        </div>
      )
    })
  }

  render() {
    let events = this._getEvents(this.props.events);
    return (
      <div>
        {events}
      </div>
    )
  }
}

export default Event;
