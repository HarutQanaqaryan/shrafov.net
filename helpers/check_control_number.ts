export const shortIdx = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];
export const longIdx = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5,
];

const sumNumber = (uin: any[], nums: number[]): number => {
  return uin.reduce((acc, el, i) =>
    acc + el * nums[i]
    , 0);
};

const shiftElements = (idx): number[] => {
  return idx.slice(2).concat(idx.slice(0, 2))
}

const checkingControlNumber = (uin: any[], idx: number[]): number => {
  let checkNumberFirst: number = sumNumber(uin, idx);
  let checkNumberSecond: number = sumNumber(uin, shiftElements(idx))
  if (checkNumberFirst % 11 === 10) {
    return checkNumberSecond % 11;
  } else if (checkNumberSecond === 10) {
    return 0;
  } else {
    return checkNumberFirst % 11;
  }
};

export default checkingControlNumber;
