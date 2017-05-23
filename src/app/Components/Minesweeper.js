import React from 'react';
import { getInitiatedMinesField } from '../utils/common';

class Minesweeper extends React.Component {

  constructor() {
    super();
  }

  componentWillMount() {
    const minesCount = 8;
    const rowsCount = 10;
    const colsCount = 10;
    const minesField = getInitiatedMinesField(rowsCount, colsCount, minesCount);
    console.log('minesField', minesField);
  }

  render() {
       return (
         <div>
          <div>Minesweeper</div>
         </div>
       );
  };

}

export default Minesweeper;
