//@format

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export class WelcomeView extends Component {
  render() {
    return (
      <div className="Welcome">
        <p>Welcome to Tic Tac Toe!</p>
        <button className="hvh" value="hvh">
          <Link to="/hvh">Human vs Human</Link>
        </button>
        <button className="hvuc" value="hvuc">
          <Link to="/hvuc">Human vs Unbeatable Computer</Link>
        </button>
      </div>
    );
  }
}
