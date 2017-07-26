import React, { Component } from 'react';

class Filters extends Component {
  constructor(){
    super();
    this.state = {
      categories: ["Sports", "Student Life", "Academic", "Career"]
    }
  }

  render(){
    return(
      <div className="card">
      {
        this.state.categories.map( category =>
          <span className="filter" >{category}</span>
        )
      }
      </div>
  )}
}

export default Filters;
