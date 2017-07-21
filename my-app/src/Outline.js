import React, { Component } from 'react';
import './Outline.css';


class Outline extends Component {
  _getEvents() {
    const eventsList = [
      {date: "Monday", hour: "2:00pm", title: "Computer Science at Hunter", category: "Academic", id:1},
      {date: "Monday", hour: "3:00pm", title: "Unruly Visions: The Aesthetic Practices of Queer Diaspora", category: "Academic", id:2},
      {date: "Monday", hour: "4:00pm", title: "Land the Internship of your Dreams", category: "Career", id:3}]

    return eventsList.map((event) => {
      return (
        <li key={event.id} className="group"><span className="hour"> {event.hour} </span> {event.title} </li>
      )
    })
  }

  render() {
    let events = this._getEvents();
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
