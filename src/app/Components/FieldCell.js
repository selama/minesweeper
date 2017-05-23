import React from 'react';

const FieldCell = (props) => {
  return (
    <div className="cell" onClick={(e) => props.onClick(e, props.rowIndex, props.colIndex)} onContextMenu={(e) => props.onRightClick(e, props.rowIndex, props.colIndex)}>

    </div>
  );
};

export default FieldCell;
