//@format

import React, {Component} from 'react';
import {Grid} from './Grid';
import {Game} from './ttt';

export class BoardView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const game = new Game(3);

    return (
      <div className="PlayGame">
        <Grid game={game} updateGameMessage={this.gameMessage} />
      </div>
    );
  }
}
