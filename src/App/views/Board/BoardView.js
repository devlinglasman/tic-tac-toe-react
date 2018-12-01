//@format

import React, {Component} from 'react';
import * as ttt from './ttt';

export class BoardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: ttt.makeGrid(3),
    };
  }

  renderTile = idNumber => {
    return <button className="tile">{idNumber}</button>;
  };

  renderRow = () => {
    return (
      <div className="row1">
        <div className="tile">
          {this.renderTile(1)}
          {this.renderTile(1)}
          {this.renderTile(1)}
        </div>
      </div>
    );
  };

  formatGrid = grid => {};

  render() {
    return (
      <div className="grid">
        <div className="row1">{this.renderRow()}</div>
        <div className="row2">{this.renderRow()}</div>
        <div className="row3">{this.renderRow()}</div>
      </div>
    );
  }
}
