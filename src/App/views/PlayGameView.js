//@format

import React, {Component} from 'react';
import {Grid} from './Grid';
import {Game} from '../Core/Game';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export class PlayGameView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: this.props.location.pathname,
      game: new Game(3),
      isFinished: false,
      tileTaken: false,
    };
  }

  gameMessage = () => {
    if (!this.state.isFinished) {
      return <p>Please select a tile</p>;
    } else {
      if (this.state.game.isWon()) {
        if (this.state.game.isP1Turn) {
          return <p>Player 1 won!</p>;
        } else {
          return <p>Player 2 won!</p>;
        }
      } else {
        return <p>It was a tie!</p>;
      }
    }
  };

  tileTaken = () => {
    this.setState({
      tileTaken: true,
    });
  };

  tileTakenMessage = () => {
    if (this.state.tileTaken) {
      return <p>Oops, that one's taken!</p>;
    }
  };

  resetTileTaken = () => {
    this.setState({tileTaken: false});
  };

  finish = () => {
    this.setState({
      isFinished: true,
    });
  };

  backToWelcome = () => {
    if (this.state.isFinished) {
      return (
        <button>
          <Link to="/">Choose Again</Link>
        </button>
      );
    }
  };

  render() {
    return (
      <div className="PlayGame">
        {this.gameMessage()}
        {this.tileTakenMessage()}
        <Grid
          players={this.state.players}
          game={this.state.game}
          finish={this.finish}
          tileTaken={this.tileTaken}
          resetTileTaken={this.resetTileTaken}
        />
        {this.backToWelcome()}
      </div>
    );
  }
}
