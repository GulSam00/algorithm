function solution(array) {
  let length = array.length;

  let maxNum = array[0];
  let curNum;
  let maxCount = 0;
  let curCount;
  let duo = 0;

  for (let i = 0; i < length; i++) {
    curNum = array[i];
    curCount = 0;
    for (let j = 0; j < length; j++) {
      if (curNum === array[j]) curCount++;
    }
    if (curCount > maxCount) {
      maxCount = curCount;
      maxNum = array[i];
      duo = 0;
    } else if (curCount == maxCount && curNum != maxNum) {
      duo = 1;
    }
  }
  if (duo) return -1;
  return maxNum;
}

const arr = [1, 2, 3, 4, 5, 1, 1, 2, 7, 7, 10, 10, 11, 11, 11];
console.log(solution(arr));
