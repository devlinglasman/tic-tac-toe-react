//@format

export class Board {
  constructor(gridSize) {
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

  placeMark = (mark, position) => {
    this.tiles[position] = mark;
  };
}
