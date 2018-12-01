//@format

import React, {Component} from 'react';
import './App.css';
import {Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {BoardView} from './views/Board/BoardView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <div>
              <Route exact path="/" component={BoardView} />
            </div>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
