//@format

export const makeGrid = gridSize => {
  let newGrid = [];
  for (let i = 0; i < gridSize * gridSize; i++) {
    newGrid.push('');
  }
  return newGrid;
};

export const compute = move => {
  return 'ongoing';
};
