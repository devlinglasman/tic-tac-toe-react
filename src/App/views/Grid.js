//@format

import React, {Component} from 'react';
import {EMPTY, P1, P2} from '../Constants';

export class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: props.game,
      gridSize: props.game.gridSize,
      tiles: props.game.board.tiles,
      checkFinished: props.checkFinished,
    };
  }

  handleClick = event => {
    if (!this.state.game.finished()) {
      this.state.game.playTurn(event.target.value);
      this.setState({
        tiles: this.state.game.board.tiles,
      });
      this.state.checkFinished();
    }
  };

  renderTile = idNumber => {
    const actualMark = this.state.tiles[idNumber];
    let representedMark;
    if (actualMark === EMPTY) {
      representedMark = idNumber + 1;
    } else if (actualMark === P1) {
      representedMark = 'X';
    } else {
      representedMark = 'O';
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
    for (let i = 0; i < this.state.gridSize; i++) {
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
    return (
      <div>
        <div className="tiles">{formattedGrid}</div>
      </div>
    );
  }
}
