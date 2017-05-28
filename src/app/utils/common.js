const getRangeNumbers = (minInclusive, maxExclusive) => {
  let rangeNumbers = [];
  for (let i = minInclusive; i < maxExclusive; i++) {
    rangeNumbers.push(i);
  }
  return rangeNumbers;
}

const getRandomIndex = (max) => {
  return Math.floor(Math.random() * max);
}

const randomNumbers = (minInclusive, maxExclusive, count) => {
  let rangeNumbers = getRangeNumbers(minInclusive, maxExclusive);
  let randomNumbers = [];
  while (count > 0) {
    const randomIndex = getRandomIndex(rangeNumbers.length);
    randomNumbers.push(rangeNumbers[randomIndex]);
    rangeNumbers.splice(randomIndex, 1);
    count--;
  }
  return randomNumbers;
};

const index2x = (index, xSize) => {
  return index % xSize;
}

const index2y = (index, xSize) => {
  return Math.floor(index / xSize);
}

export const setRandomMines = (gameState, minesCount) => {
  let newGameState = Object.assign({}, gameState);
  const ySize = Object.keys(newGameState.minesField).length;
  const xSize = Object.keys(newGameState.minesField[0]).length;
  const allCellsCount = ySize * xSize;
  randomNumbers(0, allCellsCount, minesCount).forEach((mineIndex) => {
    const x = index2x(mineIndex, xSize);
    const y = index2y(mineIndex, xSize);
    let cell = getCell(newGameState.minesField, x, y);
    cell.mine = true;
  });
  return newGameState;
};

export const getCell = (minesField, x, y) => {
  return minesField[y][x];
}

const getSurroundingCells = (minesField, x, y) => {
  let surroundingCells = [];
  const ySize = Object.keys(minesField).length;
  const xSize = Object.keys(minesField[0]).length;
  for (let x1 = Math.max(x - 1, 0); x1 <= Math.min(x + 1, xSize - 1); x1++) {
    for (let y1 = Math.max(y - 1, 0); y1 <= Math.min(y + 1, ySize - 1); y1++) {
      if (x === x1 && y === y1) {
        continue;
      }
      surroundingCells.push(getCell(minesField, x1, y1));
    }
  }
  return surroundingCells;
};

export const initiateMinesField = (xSize, ySize) => {
  let gameState = {
    minesField : []
  };
  const defaultCell = {
    mine: false,
    exploded: false,
    marked: false,
    revealed: false
  };
  for (let y = 0; y < ySize; y++) {
    gameState.minesField[y] = {};
    for (let x = 0; x < xSize; x++) {
      gameState.minesField[y][x] = Object.assign({}, defaultCell, {x: x, y: y});
    }
  }
  return gameState;
};

const revealSurrounding = (gameState, surroundingCells) => {
  let newGameState = Object.assign({}, gameState);
  surroundingCells.forEach((cell) => {
    newGameState = revealCell(newGameState, cell.x, cell.y);
  });
  return newGameState;
};

export const revealCell = (gameState, x, y) => {
  let newGameState = Object.assign({}, gameState);
  let cell = getCell(newGameState.minesField, x, y);
  if (!cell.revealed && !cell.marked) {
    cell.revealed = true;
    if (cell.mine) {
      cell.exploded = true;
    } else {
      const surroundingCells = getSurroundingCells(newGameState.minesField, x, y);
      cell.surroundingMinesCount = surroundingCells.filter((cell) => cell.mine).length;
      if (cell.surroundingMinesCount === 0) {
        newGameState = revealSurrounding(newGameState, surroundingCells);
      }
    }
  }
  return newGameState;
};

export const toggleMarkCell = (gameState, x, y) => {
  let newGameState = Object.assign({}, gameState);
  let cell = getCell(newGameState.minesField, x, y);
  if (!cell.revealed) {
    cell.marked = !cell.marked;
  }
  return newGameState;
};

export const isGameOver = (gameState) => {
  return isGameWon(gameState) || isGameLost(gameState);
}

export const isGameWon = (minesField) => {
  return false;
}

export const isGameLost = (minesField) => {
  false;
}
