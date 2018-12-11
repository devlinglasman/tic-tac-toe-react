//@format

import React, {Component} from 'react';
import {Grid} from './Grid';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export class PlayGameView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: this.props.location.pathname,
      isFinished: false,
      tileTaken: false,
      gameMessage: 'Please pick a tile',
    };
  }

  gameMessage = () => {
    return <p>{this.state.gameMessage}</p>;
  };

  announceWin = player => {
    this.setState({gameMessage: `Player ${player} won!`, isFinished: true});
  };

  announceTie = () => {
    this.setState({gameMessage: 'It was a tie!', isFinished: true});
  };

  handleClickWhenTaken = () => {
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
          finish={this.finish}
          handleClickWhenTaken={this.handleClickWhenTaken}
          resetTileTaken={this.resetTileTaken}
          announceWin={this.announceWin}
          announceTie={this.announceTie}
        />
        {this.backToWelcome()}
      </div>
    );
  }
}
