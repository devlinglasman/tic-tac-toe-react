//@format

export class DumbCompPlayer {
  pickCompTile = board => {
    let randomTile = this.getRandomTile(board);
    while (!board.freeTile(randomTile)) {
      randomTile = this.getRandomTile(board);
    }
    return randomTile;
  };

  getRandomTile = board => {
    return Math.floor(Math.random() * Math.floor(board.boardLength()));
  };
}
