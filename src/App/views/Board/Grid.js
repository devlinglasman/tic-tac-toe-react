//@format

import React, {Component} from 'react';
import * as ttt from './ttt';

export class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: ttt.makeGrid(props.gridSize),
      gridSize: props.gridSize,
    };
  }

  renderTile = idNumber => {
    return (
      <button
        className="tile"
        key={idNumber}
        value={idNumber}
        onClick={this.handleClick}>
        {idNumber}
      </button>
    );
  };

  handleClick = event => {};

  renderRow = rowNumber => {
    let rows = [];
    for (let i = 1; i <= this.state.gridSize; i++) {
      let multiplier = rowNumber * this.state.gridSize;
      rows.push(this.renderTile(i + multiplier));
    }
    let rowId = `row${rowNumber + 1}`;
    return (
      <div className={rowId} key={rowId}>
        {rows}
      </div>
    );
  };

  formatGrid = grid => {
    let formattedGrid = [];
    for (let i = 0; i < this.state.gridSize; i++) {
      formattedGrid.push(this.renderRow(i));
    }
    return <div className="grid">{formattedGrid}</div>;
  };

  render() {
    return this.formatGrid(this.state.grid);
  }
}
