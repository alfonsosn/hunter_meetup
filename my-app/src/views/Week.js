import React, { Component } from 'react';
import Outline from '../dynamic/Outline.js'
import Filters from '../dynamic/Filters.js'
import Dates from '../dynamic/Dates.js'
import DateScheduler from '../helpers'
import './Week.css';

class Week extends Component {


  render() {
    const day = new DateScheduler.DateScheduler;
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

    return (
      <div>
        <Filters />
        <Dates monday={day.monday} friday={day.friday}/>
        <Outline events={events} date={day.monday}/>
        <Outline events={events} date={day.tuesday}/>
        <Outline events={events} date={day.wednesday}/>
        <Outline events={events} date={day.thursday}/>
        <Outline events={events} date={day.friday}/>
			</div>
    );
  }
}

export default Week;
