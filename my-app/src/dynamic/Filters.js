import React, { Component } from 'react';

class Filters extends Component {
  constructor(){
    super();
    this.state = {
      categories: ["Sports", "Student Life", "Academic", "Career"],
      className: 'filter'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      if (this.state.className === 'filter'){
          this.setState({className: 'unselected-filter'});
      } else {
          this.setState({className: 'filter'});
      }
  }

  render(){
    let i = 0;
    return(
      <div className="card">
      {
        this.state.categories.map( category =>
          <span className={this.state.className} key={i++} onClick={this.handleClick}>{category}</span>
        )
      }
      </div>
  )}
}

export default Filters;
