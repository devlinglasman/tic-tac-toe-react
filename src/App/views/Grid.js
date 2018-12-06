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

  runGame = tilePicked => {
    this.state.game.makeHumanMove(tilePicked);
    this.setState({tiles: this.state.tiles});
    if (this.state.game.isFinished(P1)) {
      this.state.markFinished(P1);
    } else {
      this.state.game.makeCompMove();
      this.setState({tiles: this.state.tiles});
      if (this.state.game.isFinished(P2)) {
        this.state.markFinished(P2);
      }
    }
  };

  handleClick = event => {
    const tilePicked = event.target.value;
    if (!this.state.game.isFinished()) {
      if (this.state.game.isTileFree(tilePicked)) {
        this.runGame(tilePicked);
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
