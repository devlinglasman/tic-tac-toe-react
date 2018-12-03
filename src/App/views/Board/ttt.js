//@format

export class Game {
  constructor(gridSize) {
    this.gridSize = gridSize;
    this.grid = this.makeGrid(gridSize);
  }

  makeGrid = gridSize => {
    let newGrid = [];
    for (let i = 0; i < gridSize * gridSize; i++) {
      newGrid.push('');
    }
    return newGrid;
  };

  computeMove = move => {
    this.grid[move] = 'X';
  };
}
