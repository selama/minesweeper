import React from 'react';
import { render } from 'react-dom';
import Minesweeper from './Components/Minesweeper';

class App extends React.Component {
  render() {
    return (
      <div>
        <Minesweeper/>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));
