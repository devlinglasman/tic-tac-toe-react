//@format

import React, {Component} from 'react';
import {Grid} from './Grid';
import {Game} from '../Core/Game';

export class PlayGameView extends Component {
  render() {
    const game = new Game(3);

    return (
      <div className="PlayGame">
        <Grid game={game} />
      </div>
    );
  }
}
