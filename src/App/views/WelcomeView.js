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
        <button className="hvc" value="hvc">
          <Link to="/hvc">Human vs Unbeatable Computer</Link>
        </button>
        <button className="cvh" value="cvh">
          <Link to="/cvh">Unbeatable Computer vs Human</Link>
        </button>
        <button className="cvc" value="cvc">
          <Link to="/cvc">Computer vs Computer</Link>
        </button>
      </div>
    );
  }
}
