//@format

import React, {Component} from 'react';
import './App.css';
import {Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {PlayGameView} from './views/PlayGameView';
import {WelcomeView} from './views/WelcomeView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={WelcomeView} />
            <Route exact path="/hvh" component={PlayGameView} />
            <Route exact path="/hvc" component={PlayGameView} />
            <Route exact path="/cvh" component={PlayGameView} />
            <Route exact path="/cvc" component={PlayGameView} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
