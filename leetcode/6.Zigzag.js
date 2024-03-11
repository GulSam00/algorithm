// 18:26 시작
// 18:58 종료

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let answer = "";
  let j = 0;
  let numWeight = (numRows - 1) * 2;
  if (numWeight === 0) numWeight = 1;
  for (let i = 0; i < numRows; i++) {
    j = i;
    let curWeight = numWeight - i * 2;

    let arr = [];
    let arrI = 0;

    if (Math.max(curWeight, numWeight - curWeight) === numWeight) {
      arr.push(numWeight, numWeight);
    } else arr.push(curWeight, numWeight - curWeight);

    while (j <= s.length - 1) {
      answer += s[j];
      j += arr[arrI++ % 2];
    }
  }

  return answer;
};

var convertFast = function (s, numRows) {
  if (numRows === 1) return s;
  let result = Array(numRows).fill("");

  let curRow = 0,
    dir = -1;
  for (let char of s) {
    console.log(result);

    result[curRow] += char;

    if (curRow === 0 || curRow === numRows - 1) {
      dir = -dir;
    }

    curRow += dir;
  }

  return result.join("");
};

console.log(convertFast("PAYPALISHIRING", 3));
