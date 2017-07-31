import React, { Component } from 'react';

class Filters extends Component {
  constructor(){
    super();
    this.state = {
      categories: ["Sports", "Student Life", "Academic", "Career"]
    }
  }

  render(){
    let i = 0;
    return(
      <div className="card">
      {
        this.state.categories.map( category =>
          <span className="filter" key={i++}>{category}</span>
        )
      }
      </div>
  )}
}

export default Filters;
