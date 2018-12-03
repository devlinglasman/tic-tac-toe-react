//@format

export class Game {
  constructor(gridSize) {
    this.gridSize = gridSize;
    this.tiles = this.createTiles(gridSize);
    this.playerOneTurn = true;
  }

  createTiles = gridSize => {
    let newTiles = [];
    for (let i = 0; i < gridSize * gridSize; i++) {
      newTiles.push('');
    }
    return newTiles;
  };

  computeMove = move => {
    if (this.playerOneTurn) {
      this.tiles[move] = 'X';
    } else {
      this.tiles[move] = 'O';
    }
    this.playerOneTurn = !this.playerOneTurn;
  };
}
