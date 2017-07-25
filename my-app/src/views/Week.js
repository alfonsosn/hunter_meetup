import React, { Component } from 'react';
import Outline from '../dynamic/Outline.js'
import './Week.css';

class Week extends Component {
  render() {

    const categories = ["Sports", "Student Life", "Academic", "Career"]
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const events = [
      {date: "Mon", hour: "2:00pm", title: "Computer Science at Hunter", category: "Academic", key: 19},
      {date: "Mon", hour: "3:00pm", title: "Unruly Visions: The Aesthetic Practices of Queer Diaspora", category: "Academic", key: 18},
      {date: "Mon", hour: "4:00pm", title: "Land the Internship of your Dreams", category: "Career", key: 19},
      {date: "Tue", hour: "1:00pm", title: "Basketball: Hawks VS NYU", category: "Sports", key: 17},
      {date: "Tue", hour: "11:00am", title: "Back to Back: Hip-Hop and Urban Justice", category: "Academic", key: 16},
      {date: "Tue", hour: "3:00pm", title: "USG: Cupcakes Wars", category: "Student Life", key: 15},
      {date: "Wed", hour: "3:00pm", title: "Major Fair", category: "Career", key: 14},
      {date: "Thu", hour: "7:00pm", title: "Roosevelt House: The New Deal in NYC", category: "Student Life", key: 13},
      {date: "Thu", hour: "3:00pm", title: "International Keyboard Institute & Festival", category: "Student Life", key: 12},
      {date: "Fri", hour: "3:00pm", title: "Undergraduate Nursing Generic Info-Session", category: "Academic", key: 11},
      {date: "Fri", hour: "6:30pm", title: "Manal al-Sharif Book Talk – Daring to Drive: A Saudi Woman's", category: "Student Life", key: 10}
    ]

    // get current date
    let curr = new Date;

    // First day is the day of the month - the day of the week
    let first = curr.getDate() - curr.getDay() + 1;
    let second = first + 1;
    let third = first + 2;
    let fourth = first + 3;
    let fifth = first + 4;

    let monday = new Date(curr.setDate(first)).toDateString();
    let tuesday = new Date(curr.setDate(second)).toDateString();
    let wednesday = new Date(curr.setDate(third)).toDateString();
    let thursday = new Date(curr.setDate(fourth)).toDateString();
    let friday = new Date(curr.setDate(fifth)).toDateString();


    return (
      <div>

    		<div id="date" className="card">
    			<h3> {monday} - {friday} </h3>
    		</div>

    		<div className="card">
          {
            categories.map( category =>
              <span className="filter" key={category}>{category}</span>
            )
          }
    		</div>

        <Outline date={monday} events={events}/>
        <Outline date={tuesday} events={events}/>
        <Outline date={wednesday} events={events}/>
        <Outline date={thursday} events={events}/>
        <Outline date={friday} events={events}/>

			</div>
    );
  }
}

export default Week;
