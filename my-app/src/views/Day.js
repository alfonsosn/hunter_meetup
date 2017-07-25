import React, { Component } from 'react';
import Event from '../dynamic/Event.js'

class Week extends Component {

  render() {

    const categories = ["Sports", "Student Life", "Academic", "Career"]
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    const events = [
      {date: "Monday", hour: "2:00pm", title: "Computer Science at Hunter", category: "Academic", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima itaque possimus, provident dolor magni similique dolorum.", key: 1},
      {date: "Monday", hour: "3:00pm", title: "Unruly Visions: The Aesthetic Practices of Queer Diaspora", category: "Academic", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima itaque possimus, provident dolor magni similique dolorum.", key: 2},
      {date: "Monday", hour: "4:00pm", title: "Land the Internship of your Dreams", category: "Career", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima itaque possimus, provident dolor magni similique dolorum.", key: 3},
      {date: "Monday", hour: "4:00pm", title: "Career Fair", category: "Career", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima itaque possimus, provident dolor magni similique dolorum.", key: 4},
    ]

    return (
      <div>

    		<div id="date" className="card">
    			<h3> Events for {this.props.match.params.day} </h3>
    		</div>

    		<div className="card">
          {
            categories.map( category =>
              <span key={category.key} className="filter">{category}</span>
            )
          }
    		</div>

      <Event date="Monday" events={events}/>

			</div>
    );
  }
}

export default Week;
