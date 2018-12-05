//@format

import React, {Component} from 'react';
import {EMPTY, P1, P2} from '../Constants';
import {GridFormatter} from './GridFormatter';

export class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: props.game,
      gridSize: props.game.gridSize,
      tiles: props.game.board.tiles,
      markFinished: props.markFinished,
      tileTaken: props.tileTaken,
    };
  }

  handleClick = event => {
    if (!this.state.game.finished()) {
      if (this.state.game.tileFree(event.target.value)) {
        this.state.game.playTurn(event.target.value);
        this.setState({
          tiles: this.state.game.board.tiles,
        });
        if (this.state.game.finished()) {
          this.state.markFinished();
        }
      } else {
        this.state.tileTaken();
      }
    }
  };

  render() {
    return (
      <div>
        <GridFormatter
          gridSize={this.state.gridSize}
          tiles={this.state.tiles}
          handleClick={event => this.handleClick(event)}
        />
      </div>
    );
  }
}
