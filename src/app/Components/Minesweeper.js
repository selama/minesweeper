import React from 'react';
import { initiateMinesField, setRandomMines, getCell, revealCell, toggleMarkCell, isGameOver } from '../utils/common';
import FieldRow from '../Components/FieldRow';

class Minesweeper extends React.Component {

  constructor() {
    super();
  }

  componentWillMount() {
    const minesCount = 30;
    const xSize = 10;
    const ySize = 10;

    const minesField = setRandomMines(initiateMinesField(xSize, ySize), minesCount);
    this.setState({
      minesField
    });
  }

  onClick(e, x, y) {
    e.preventDefault();
    if (!isGameOver(this.state.minesField)) {
      const minesField = revealCell(this.state.minesField, x, y);
      this.setState({minesField: minesField});
    }
  }

  onRightClick(e, x, y) {
    e.preventDefault();
    if (!isGameOver(this.state.minesField)) {
      const minesField = toggleMarkCell(this.state.minesField, x, y);
      this.setState({minesField: minesField});
    }
  }

  getFieldRows() {
    let yRows = [];
    for (let y = 0; y < Object.keys(this.state.minesField).length; y++) {
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
        <div>
          { this.getFieldRows() }
        </div>
      </div>
    );
  };

}

export default Minesweeper;
