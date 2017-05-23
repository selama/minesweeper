import React from 'react';
import { getInitiatedMinesField } from '../utils/common';
import FieldRow from '../Components/FieldRow';

class Minesweeper extends React.Component {

  constructor() {
    super();
  }

  componentWillMount() {
    const minesCount = 30;
    const rowsCount = 10;
    const colsCount = 10;
    const minesField = getInitiatedMinesField(rowsCount, colsCount, minesCount);
    this.setState({
      minesCount,
      rowsCount,
      colsCount,
      minesField
    });
  }

  onClick(e, rowIndex, colIndex) {
    console.log('clicked on',rowIndex,colIndex);
    e.preventDefault();
  }

  onRightClick(e ,rowIndex, colIndex) {
    console.log('right clicked on',rowIndex,colIndex);
    e.preventDefault();
  }

  getFieldRows() {
    let fieldRows = [];
    for (let r=0; r<this.state.rowsCount; r++) {
      fieldRows.push(<FieldRow key={r}
                               rowIndex={r}
                               colsCount={this.state.colsCount}
                               minesField={this.state.minesField}
                               onClick={this.onClick}
                               onRightClick={this.onRightClick}>
      </FieldRow>);
    }
    return fieldRows;
  }

  render() {
       return (
         <div>
           { this.getFieldRows() }
         </div>
       );
  };

}

export default Minesweeper;
