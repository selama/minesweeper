import React from 'react';

const FieldCell = (props) => {
  let text = '*';
  text = props.cell.marked ? 'M' : text;
  //text = props.cell.revealed ? 'R' : text;
  text = props.cell.exploded ? 'BOOM' : text;
  text = props.cell.surroundingMinesCount || props.cell.surroundingMinesCount===0 ? props.cell.surroundingMinesCount : text;
  return (
    <div className="cell" onClick={(e) => props.onClick(e, props.cell.x, props.cell.y)} onContextMenu={(e) => props.onRightClick(e, props.cell.x, props.cell.y)}>
      <span>{text}</span>
    </div>
  );
};

export default FieldCell;
