import React from 'react';
import { initiateMinesField, setRandomMines, getCell, revealCell, toggleMarkCell } from '../utils/common';
import FieldRow from '../Components/FieldRow';

class Minesweeper extends React.Component {

  constructor() {
    super();
  }

  componentWillMount() {
    const minesCount = 30;
    const xSize = 10;
    const ySize = 10;

    const marksCount = 0;
    const isGameOver = false;
    const minesField = setRandomMines(initiateMinesField(xSize, ySize), minesCount);
    this.setState({
      isGameOver,
      marksCount,
      minesCount,
      minesField
    });
  }

  onClick(e ,x, y) {
    e.preventDefault();
    if (!this.state.isGameOver) {
      const minesFiled = revealCell(this.state.minesField, x, y);
      const isGameOver = getCell(minesFiled, x, y).exploded;
      this.setState({minesField: minesFiled, isGameOver: isGameOver});
    }
  }

  onRightClick(e, x, y) {
    e.preventDefault();
    if (!this.state.isGameOver) {
      const minesFiled = toggleMarkCell(this.state.minesField, x, y);
      this.setState({minesField: minesFiled});
    }
  }

  getFieldRows() {
    let yRows = [];
    for (let y=0; y<Object.keys(this.state.minesField).length; y++) {
      yRows.push(<FieldRow key={y}
                           minesFieldYRow={this.state.minesField[y]}
                           onClick={this.onClick.bind(this)}
                           onRightClick={this.onRightClick.bind(this)}/>);
    }
    return yRows;
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
