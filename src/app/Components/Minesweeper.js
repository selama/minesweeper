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

    const gameState = setRandomMines(initiateMinesField(xSize, ySize), minesCount);
    this.setState({
      gameState
    });
  }

  onClick(e, x, y) {
    e.preventDefault();
    if (!isGameOver(this.state.gameState)) {
      const gameState = revealCell(this.state.gameState, x, y);
      this.setState({gameState: gameState});
    }
  }

  onRightClick(e, x, y) {
    e.preventDefault();
    if (!isGameOver(this.state.gameState)) {
      const gameState = toggleMarkCell(this.state.gameState, x, y);
      this.setState({gameState: gameState});
    }
  }

  getFieldRows() {
    let yRows = [];
    for (let y = 0; y < Object.keys(this.state.gameState.minesField).length; y++) {
      yRows.push(<FieldRow key={y}
                           minesFieldYRow={this.state.gameState.minesField[y]}
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
