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
      tileTaken: false,
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

  tileTaken = () => {
    this.setState({
      tileTaken: true,
    });
  };

  tileTakenMessage = () => {
    if (this.state.tileTaken) {
      return <p>Oops, that ones taken!</p>;
    }
  };

  checkFinished = () => {
    this.setState({
      tileTaken: false,
    });
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
        {this.tileTakenMessage()}
        <Grid
          game={this.state.game}
          checkFinished={this.checkFinished}
          tileTaken={this.tileTaken}
        />
      </div>
    );
  }
}
