//@format

import React, {Component} from 'react';
import {GridFormatter} from './GridFormatter';
import {Game} from '../Core/Game';

export class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: props.players,
      game: new Game(3, this.updateBoard, props.announceWin, props.announceTie),
      update: false,
    };
  }

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

  updateBoard = () => {
    this.setState({update: true});
    this.props.resetTileTaken();
  };

  handleClick = event => {
    const tilePicked = event.target.value;
    this.state.game.makeHumanMove(tilePicked);
  };

  handleClickWhenTaken = event => {
    this.props.handleClickWhenTaken();
  };

  render() {
    if (this.state.game.isFinished()) {
      return (
        <div>
          <GridFormatter
            gridSize={this.state.game.gridSize}
            tiles={this.state.game.board.tiles}
            handleClick={Function.prototype()}
            handleClickWhenTaken={Function.prototype()}
          />
        </div>
      );
    } else {
      return (
        <div>
          <GridFormatter
            gridSize={this.state.game.gridSize}
            tiles={this.state.game.board.tiles}
            handleClick={event => this.handleClick(event)}
            handleClickWhenTaken={event => this.handleClickWhenTaken(event)}
          />
        </div>
      );
    }
  }
}
