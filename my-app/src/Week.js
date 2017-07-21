import React, { Component } from 'react';
import Outline from './Outline.js'
import './Week.css';

class Week extends Component {
  render() {

    const categories = ["Sports", "Student Life", "Academic", "Career"]
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const events = [
      {date: "Monday", hour: "2:00pm", title: "Computer Science at Hunter", category: "Academic"},
      {date: "Monday", hour: "3:00pm", title: "Unruly Visions: The Aesthetic Practices of Queer Diaspora", category: "Academic"},
      {date: "Monday", hour: "4:00pm", title: "Land the Internship of your Dreams", category: "Career"},
      {date: "Tuesday", hour: "1:00pm", title: "Basketball: Hawks VS NYU", category: "Sports"},
      {date: "Tuesday", hour: "11:00am", title: "Back to Back: Hip-Hop and Urban Justice", category: "Academic"},
      {date: "Tuesday", hour: "3:00pm", title: "USG: Cupcakes Wars", category: "Student Life"},
      {date: "Wednesday", hour: "3:00pm", title: "Major Fair", category: "Career"},
      {date: "Thursday", hour: "7:00pm", title: "Roosevelt House: The New Deal in NYC", category: "Student Life"},
      {date: "Thursday", hour: "3:00pm", title: "International Keyboard Institute & Festival", category: "Student Life"},
      {date: "Friday", hour: "3:00pm", title: "Undergraduate Nursing Generic Info-Session", category: "Academic"},
      {date: "Friday", hour: "6:30pm", title: "Manal al-Sharif Book Talk – Daring to Drive: A Saudi Woman's", category: "Student Life"}
    ]

    return (
      <div>

    		<div id="date" className="card">
    			<h3> Events for Oct. 21st - 27th </h3>
    		</div>

    		<div className="card">
          {
            categories.map( category =>
              <span className="filter">{category}</span>
            )
          }
    		</div>

        <Outline date="Monday" events={events}/>
        <Outline date="Tuesday" events={events}/>
        <Outline date="Wednesday" events={events}/>
        <Outline date="Thursday" events={events}/>
        <Outline date="Friday" events={events}/>

			</div>
    );
  }
}

export default Week;
