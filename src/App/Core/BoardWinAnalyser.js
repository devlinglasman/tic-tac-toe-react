//@format

export class BoardWinAnalyser {
  constructor(board, player) {
    this.board = board;
    this.player = player;
    this.gridSize = Math.sqrt(board.length);
  }

  anyLineIsWinning = () => {
    const allLines = this.getAllRowIndices()
      .concat(this.getAllColIndices())
      .concat(this.getBothDiagIndices());

    for (let i = 0; i < allLines.length; i++) {
      if (this.lineIsWinning(allLines[i])) {
        return true;
      }
    }
    return false;
  };

  lineIsWinning = line => {
    for (let i = 0; i < line.length; i++) {
      if (!(this.board[line[i]] === this.player)) {
        return false;
      }
    }
    return true;
  };

  getAllRowIndices = () => {
    let allRowIndices = [];
    for (let i = 0; i < this.board.length; i += this.gridSize) {
      allRowIndices.push(this.getOneRowIndices(i));
    }
    return allRowIndices;
  };

  getOneRowIndices = beginningNumber => {
    let set = [];
    for (let i = 0; i < this.gridSize; i++) {
      set.push(beginningNumber);
      beginningNumber++;
    }
    return set;
  };

  getAllColIndices = () => {
    let allColIndices = [];
    for (let i = 0; i < this.gridSize; i++) {
      allColIndices.push(this.getOneColIndices(i));
    }
    return allColIndices;
  };

  getOneColIndices = beginningNumber => {
    let set = [];
    for (let i = 0; i < this.gridSize; i++) {
      set.push(beginningNumber);
      beginningNumber += this.gridSize;
    }
    return set;
  };

  getBothDiagIndices = () => {
    return [this.getFirstDiagIndices(), this.getSecondDiagIndices()];
  };

  getFirstDiagIndices = () => {
    let set = [];
    for (let i = 0; i < this.gridSize; i++) {
      set.push(i * this.gridSize + i);
    }
    return set;
  };

  getSecondDiagIndices = () => {
    let set = [];
    for (let i = 0; i < this.gridSize; i++) {
      let workingNumber = i + 1;
      set.push(workingNumber * this.gridSize - workingNumber);
    }
    return set;
  };
}
