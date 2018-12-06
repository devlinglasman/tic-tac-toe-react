//@format

export class UnbeatableComp {
  pickCompTile = board => {
    const emptyTiles = board.getEmptyTiles();
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
