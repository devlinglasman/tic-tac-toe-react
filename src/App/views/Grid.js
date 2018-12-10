//@format

import React, {Component} from 'react';
import {GridFormatter} from './GridFormatter';

export class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: props.players,
      game: props.game,
      finish: props.finish,
      gridSize: props.game.gridSize,
      tiles: props.game.board.tiles,
    };
  }

  runHvHGame = tilePicked => {
    this.state.game.makeHumanMove(tilePicked);
    this.setState({tiles: this.state.tiles});
    this.props.resetTileTaken();
    if (this.state.game.isFinished()) {
      this.props.finish();
    } else {
      this.state.game.switchPlayer();
    }
  };

  runHvUCGame = tilePicked => {
    this.state.game.makeHumanMove(tilePicked);
    this.setState({tiles: this.state.tiles});
    this.props.resetTileTaken();
    if (this.state.game.isFinished()) {
      this.props.finish();
    } else {
      this.state.game.switchPlayer();
      this.state.game.makeCompMove();
      this.setState({tiles: this.state.tiles});
      if (this.state.game.isFinished()) {
        this.props.finish();
      } else {
        this.state.game.switchPlayer();
      }
    }
  };

  handleClick = event => {
    const tilePicked = event.target.value;
    if (!this.state.game.isFinished()) {
      if (this.state.game.isTileFree(tilePicked)) {
        if (this.state.players.includes('hvh')) {
          this.runHvHGame(tilePicked);
        } else {
          this.runHvUCGame(tilePicked);
        }
      } else {
        this.props.tileTaken();
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
