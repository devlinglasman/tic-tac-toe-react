//@format

export function hasPlayerWon(board, player) {
  const gridSize = Math.sqrt(board.length);

  const allLines = getAllRowIndices(board, gridSize)
    .concat(getAllColIndices(gridSize))
    .concat(getBothDiagIndices(gridSize));

  for (let i = 0; i < allLines.length; i++) {
    if (isLineWinning(board, allLines[i], player)) {
      return true;
    }
  }
  return false;
}

export function isLineWinning(board, line, player) {
  for (let i = 0; i < line.length; i++) {
    if (!(board[line[i]] === player)) {
      return false;
    }
  }
  return true;
}

export function getAllRowIndices(board, gridSize) {
  let allRowIndices = [];
  for (let i = 0; i < board.length; i += gridSize) {
    allRowIndices.push(getOneRowIndices(gridSize, i));
  }
  return allRowIndices;
}

export function getOneRowIndices(gridSize, beginningNumber) {
  let set = [];
  for (let i = 0; i < gridSize; i++) {
    set.push(beginningNumber);
    beginningNumber++;
  }
  return set;
}

export function getAllColIndices(gridSize) {
  let allColIndices = [];
  for (let i = 0; i < gridSize; i++) {
    allColIndices.push(getOneColIndices(gridSize, i));
  }
  return allColIndices;
}

export function getOneColIndices(gridSize, beginningNumber) {
  let set = [];
  for (let i = 0; i < gridSize; i++) {
    set.push(beginningNumber);
    beginningNumber += gridSize;
  }
  return set;
}

export function getBothDiagIndices(gridSize) {
  return [getFirstDiagIndices(gridSize), getSecondDiagIndices(gridSize)];
}

export function getFirstDiagIndices(gridSize) {
  let set = [];
  for (let i = 0; i < gridSize; i++) {
    set.push(i * gridSize + i);
  }
  return set;
}

export function getSecondDiagIndices(gridSize) {
  let set = [];
  for (let i = 0; i < gridSize; i++) {
    let workingNumber = i + 1;
    set.push(workingNumber * gridSize - workingNumber);
  }
  return set;
}
