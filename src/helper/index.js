import { STATUS, KEYS } from "../constant";

export const initArr2D = () => {
  let guessArrTotal = new Array();
  for (let row = 0; row < 6; row++) {
    guessArrTotal.push([]);
    for (let col = 0; col < 5; col++) {
      guessArrTotal[row][col] = {value: '', status: STATUS.NORMAL};
    }
  }
  return guessArrTotal;
};

export const keyBoard = () => {
  return KEYS.map((row, indexRow) => {
    return row.map((key, indexKey) => {
      return {
        value: key,
        status: STATUS.NORMAL
      }
    })
  })
} 