import React from 'react';
import FieldCell from '../Components/FieldCell';

const getRowCells = (rowIndex, colsCount, minesField, onClick, onRightClick) => {
  let rowCells = [];
  for (let colIndex = 0; colIndex<colsCount; colIndex++) {
    rowCells.push(<FieldCell key={rowIndex + '_' + colIndex}
                             rowIndex={rowIndex}
                             colIndex={colIndex}
                             minesField={minesField}
                             onClick={onClick}
                             onRightClick={onRightClick}>

    </FieldCell>);
  }
  return rowCells;
};

const FieldRow = (props) => {
  return (
    <div className="row">
      {getRowCells(props.rowIndex, props.colsCount, props.minesField, props.onClick, props.onRightClick)}
    </div>
  );
};

export default FieldRow;
