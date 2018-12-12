//@format

import React, {Component} from 'react';
import {GridFormatter} from './GridFormatter';
import {Game} from '../Core/Game';

export class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: new Game(
        3,
        props.players,
        this.updateBoard,
        props.announceWin,
        props.announceTie,
        this.switchClicks,
      ),
      clicksOn: false,
      update: false,
    };
  }

  switchClicks = () => {
    this.setState(prevState => ({clicksOn: !prevState.clicksOn}));
  };

  updateBoard = () => {
    this.setState(prevState => ({update: !prevState.update}));
    this.props.resetTileTaken();
  };

  handleClick = event => {
    const tilePicked = event.target.value;
    this.state.game.makeMove(tilePicked);
  };

  handleClickWhenTaken = event => {
    this.props.handleClickWhenTaken();
  };

  componentDidMount = () => {
    this.state.game.run();
  };

  render() {
    if (this.state.clicksOn) {
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
    } else {
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
    }
  }
}
