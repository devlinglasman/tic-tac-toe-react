//@format

export const makeGrid = gridSize => {
  let newGrid = [];
  let i;
  for (i = 0; i < gridSize * gridSize; i++) {
    newGrid.push('');
  }
  return newGrid;
};
