//@format

import React, {Component} from 'react';
import * as ttt from './ttt';

export class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: props.game,
      gridSize: props.game.gridSize,
      grid: props.game.makeGrid,
      updateGameMessage: props.updateGameMessage,
    };
  }

  handleClick = event => {
    this.state.game.computeMove(event.target.value);
    this.setState({grid: this.state.game.grid});
  };

  renderTile = idNumber => {
    const actualMark = this.state.grid[idNumber];
    let representedMark;
    if (actualMark === '') {
      representedMark = idNumber;
    } else {
      representedMark = actualMark;
    }

    return (
      <button
        className="tile"
        key={idNumber}
        value={idNumber}
        onClick={this.handleClick}>
        {representedMark}
      </button>
    );
  };

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

  render() {
    let formattedGrid = [];
    for (let i = 0; i < this.state.gridSize; i++) {
      formattedGrid.push(this.renderRow(i));
    }
    return <div className="grid">{formattedGrid}</div>;
  }
}
