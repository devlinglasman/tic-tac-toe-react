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
    return (
      <button className="tile" key={idNumber}>
        {idNumber}
      </button>
    );
  };

  renderRow = (rowNumber, gridSize) => {
    let rows = [];
    for (let i = 1; i <= gridSize; i++) {
      let multiplier = rowNumber * gridSize;
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
    const gridSize = Math.sqrt(grid.length);
    let formattedGrid = [];
    for (let i = 0; i < gridSize; i++) {
      formattedGrid.push(this.renderRow(i, gridSize));
    }
    return <div className="grid">{formattedGrid}</div>;
  };

  render() {
    return this.formatGrid(this.state.grid);
  }
}
