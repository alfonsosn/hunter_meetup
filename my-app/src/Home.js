import React, { Component } from 'react';
import './Home.css';





class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      categories: ["Sports", "Student Life", "Academic", "Career"]
    };
  }

  render() {
    return (
      <div>

    		<div id="date" className="card">
    			<h3> Events for Oct. 21st - 27th </h3>
    		</div>

    		<div className="card">
    			<span className="filter-1 filter">Sports</span>
    			<span className="filter-2 filter">Student Groups</span>
    			<span className="filter-3 filter">Academics</span>
    			<span className="filter-4 filter"> Career </span>
    		</div>

        <a href="#" target="_self">
        			<div className="card">
        				<p className="date"> Monday, October 21 </p>
        				<ul>
        					<li className="group"><span className="hour"> 13:00 </span>- "Computer Science at Hunter"</li>
        					<li className="group"><span className="hour"> 16:30 </span>- “Unruly Visions: The Aesthetic Practices of Queer Diaspora”</li>
        				</ul>
        			</div>
        		</a>



        		<a href="#" target="_self">
        			<div className="card">
        				<p className="date"> Tuesday, October 22 </p>
        				<ul>
        					<li className="group"><span className="hour"> 12:00 </span>- "USG presents Halloween"</li>
        					<li className="group"><span className="hour"> 15:00 </span>- "Pumpkin carving!" </li>
        				</ul>
        			</div>
        		</a>

        		<a href="#" target="_self">
        			<div className="card">
        				<p className="date"> Wednesday, October 23 </p>
        				<ul>
        					<li className="pre"><span className="hour"> 13:00 </span>- "Land the internship of your dreams"</li>
        					<li className="sport"><span className="hour"> 14:00 </span>- "Basketball: Hawks vs NYU</li>
        					<li className="academic"><span className="hour"> 15:00 </span>- "Major Fair." </li>
        				</ul>
        			</div>
        		</a>

        		<a href="#" target="_self">
        			<div className="card last">
        				<p className="date"> Friday, October 25 </p>
        				<ul>
        					<li><span class="hour">ALL DAY - No Classes</span></li>
        				</ul>
        			</div>
        		</a>

			</div>
    );
  }
}

export default Home;
