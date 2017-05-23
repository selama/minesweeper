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
  return minesField[x][y];
};

export const countSurroundingMines = (minesField, x, y, colsCount, rowsCount) => {
  let count = 0;
  for (let x1=Math.max(x-1, 0); x1<=Math.min(x+1, colsCount); x1++) {
    for (let y1=Math.max(y-1, 0); y1<=Math.min(y+1, rowsCount); y1++) {
      if (x===x1 && y===y1) {
        continue;
      }
      if (getCell(minesField, x1, y1).mine) {
        count++;
      }
    }
  }
  return count;
};
