//@format

export class Game {
  constructor(gridSize) {
    this.ongoing = true;
    this.gridSize = gridSize;
    this.tiles = this.createTiles(gridSize);
  }

  createTiles = gridSize => {
    let newTiles = [];
    for (let i = 0; i < gridSize * gridSize; i++) {
      newTiles.push('');
    }
    return newTiles;
  };

  computeMove = move => {
    this.tiles[move] = 'X';
  };
}
