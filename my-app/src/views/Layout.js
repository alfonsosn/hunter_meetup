import React, { Component } from 'react';
import Link from 'react-router-dom/link';
import './Layout.css';


class Layout extends Component {

  render() {
    return (
      <div>
        <div id="nav">
          <Link to={`/`}>
            <p> Hunter Calendar </p>
          </Link>
        </div>
      </div>
    )
  }
}

export default Layout;
