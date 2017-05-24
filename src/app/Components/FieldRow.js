import React from 'react';
import FieldCell from '../Components/FieldCell';

const getRowCells = (minesFieldYRow, onClick, onRightClick) => {
  let xRowCells = [];
  for (let x = 0; x<Object.keys(minesFieldYRow).length; x++) {
    xRowCells.push(<FieldCell
                    key={x}
                    cell={minesFieldYRow[x]}
                    onClick={onClick}
                    onRightClick={onRightClick}/>);
  }
  return xRowCells;
};

const FieldRow = (props) => {
  return (
    <div className="row">
      {getRowCells(props.minesFieldYRow, props.onClick, props.onRightClick)}
    </div>
  );
};

export default FieldRow;
