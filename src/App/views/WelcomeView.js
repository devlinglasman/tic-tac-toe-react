//@format

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export class WelcomeView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Welcome">
        <p>Welcome to Tic Tac Toe!</p>
        <button className="hvh" value="hvh">
          <Link to="/hvh">Human vs Human</Link>
        </button>
        <button className="hvc" value="hvc">
          <Link to="/hvc">Human vs Computer</Link>
        </button>
      </div>
    );
  }
}
