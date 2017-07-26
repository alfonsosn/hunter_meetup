import React, { Component } from 'react';

class Dates extends Component {
  render(){
    return(
      <div id="date" className="card">
        <h3> Events for the week {this.props.monday} - {this.props.friday}</h3>
      </div>
    )
  }
}

export default Dates;
