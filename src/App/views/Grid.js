//@format

import React, {Component} from 'react';
import {GridFormatter} from './GridFormatter';
import {Game} from '../Core/Game';

export class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: new Game(3, props.gameMode, this),
      clicksOn: false,
      update: false,
    };
  }

  turnClicksOn = () => {
    this.setState({clicksOn: true});
  };

  updateBoard = () => {
    this.setState({update: true});
    this.props.resetTileTaken();
  };

  doReset = () => {
    this.setState({clicksOn: false});
    this.setState({update: false});
  };

  handleClick = event => {
    this.state.game.playTurn(event.target.value);
  };

  handleClickWhenTaken = event => {
    this.props.handleClickWhenTaken();
  };

  componentDidMount = () => {
    this.state.game.run();
  };

  announceWin = player => {
    this.props.announceWin(player);
  };

  announceTie = () => {
    this.props.announceTie();
  };

  render() {
    if (this.state.clicksOn) {
      return (
        <div>
          <GridFormatter
            gridSize={this.state.game.board.gridSize}
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
            gridSize={this.state.game.board.gridSize}
            tiles={this.state.game.board.tiles}
            handleClick={Function.prototype()}
            handleClickWhenTaken={Function.prototype()}
          />
        </div>
      );
    }
  }
}
