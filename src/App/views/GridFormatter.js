//@format

import React, {Component} from 'react';
import {EMPTY, P1, P2} from '../Constants';

export function GridFormatter(props) {
  const renderTile = idNumber => {
    const actualMark = props.tiles[idNumber];
    let representedMark;
    if (actualMark === EMPTY) {
      representedMark = idNumber + 1;
    } else if (actualMark === P1) {
      representedMark = 'X';
    } else {
      representedMark = 'O';
    }

    return (
      <button
        className="tile"
        key={idNumber}
        value={idNumber}
        onClick={props.handleClick}>
        {representedMark}
      </button>
    );
  };

  const renderRow = rowNumber => {
    let rows = [];
    for (let i = 0; i < props.gridSize; i++) {
      let multiplier = rowNumber * props.gridSize;
      rows.push(renderTile(i + multiplier));
    }
    let rowId = `row${rowNumber + 1}`;
    return (
      <div className={rowId} key={rowId}>
        {rows}
      </div>
    );
  };

  let formattedGrid = [];
  for (let i = 0; i < props.gridSize; i++) {
    formattedGrid.push(renderRow(i));
  }
  return (
    <div>
      <div className="tiles">{formattedGrid}</div>
    </div>
  );
}
