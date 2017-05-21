import React from 'react';
import { render } from 'react-dom';

class Minesweeper extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello!</h1>
      </div>
    );
  }
}

render(<Minesweeper/>, window.document.getElementById("minesweeper"));
