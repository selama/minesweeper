const getRangeNumbers = (minInclusive, maxExclusive) => {
  let rangeNumbers = [];
  for (let i=minInclusive; i<maxExclusive; i++) {
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

export const getInitiatedMinesField = (rowsCount, colsCount, minesCount) => {
  let minesField = {};
  randomNumbers(0, rowsCount*colsCount, minesCount).forEach((mineIndex) => {
    const x = index2x(mineIndex, colsCount);
    const y = index2y(mineIndex, colsCount);
    if (!minesField[x]) {
      minesField[x] = {};
    }
    minesField[x][y] = {mine: true, revealed: false};
  });
  return minesField;
};

export const getCell = (minesField, x, y) => {
  if (!minesField[x]) {
    minesField[x] = {};
  }
  if (!minesField[x][y]) {
    return {mine:false, revealed:false};
  }
  return Object.assign({}, minesField[x][y]);
};

export const setCell = (minesField, x, y, newCell) => {
  let newField = JSON.parse(JSON.stringify(minesField));
  if (!newField[x]) {
    newField[x] = {};
  }
  newField[x,y] = newCell;
  return newField;
};
