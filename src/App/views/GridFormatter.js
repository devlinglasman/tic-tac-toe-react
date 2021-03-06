//@format

import React from 'react';
import {EMPTY, P1} from '../Constants';

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

    let clickHandling;
    if (actualMark === EMPTY) {
      clickHandling = props.handleClick;
    } else {
      clickHandling = props.handleClickWhenTaken;
    }

    return (
      <button
        className="tile"
        key={idNumber}
        value={idNumber}
        onClick={clickHandling}>
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
