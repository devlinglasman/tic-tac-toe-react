//@format

import React, {Component} from 'react';
import {Grid} from './Grid';
import {Game} from '../Core/Game';

export class PlayGameView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: new Game(3),
      isFinished: false,
    };
  }

  gameMessage = () => {
    if (!this.state.isFinished) {
      return <p>Please select a tile</p>;
    } else if (this.state.game.won()) {
      if (this.state.game.playerOneTurn) {
        return <p>Player 1 won!</p>;
      } else {
        return <p>Player 2 won!</p>;
      }
    } else {
      return <p>It was a tie!</p>;
    }
  };

  checkFinished = () => {
    if (this.state.game.finished()) {
      this.setState({
        isFinished: true,
      });
    }
  };

  render() {
    return (
      <div className="PlayGame">
        {this.gameMessage()}
        <Grid game={this.state.game} checkFinished={this.checkFinished} />
      </div>
    );
  }
}
