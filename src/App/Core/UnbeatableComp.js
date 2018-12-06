//@format

export class UnbeatableComp {
  pickCompTile = (board, activePlayer, passivePlayer) => {
    const emptyTiles = board.getEmptyTiles();
    const scores = this.generateScores(board, emptyTiles);

    return this.getTileOfMaxScore(emptyTiles, scores);
  };

  generateScores = (board, emptyTiles) => {};

  scoreBoard = (board, activePlayer, passivePlayer) => {
    if (board.isWon(activePlayer)) {
      return 10;
    } else if (board.isWon(passivePlayer)) {
      return -10;
    } else {
      return 0;
    }
  };

  getTileOfMaxScore = (tiles, scores) => {
    const maxScore = Math.max(...scores);
    const indexAtMax = score => {
      for (let i = 0; i < scores.length; i++) {
        if (maxScore === scores[i]) {
          return i;
        }
      }
    };
    return tiles[indexAtMax(scores)];
  };
}
