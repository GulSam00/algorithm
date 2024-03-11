/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanArr = ["I", "V", "X", "L", "C", "D", "M"];
  const IntArr = [1, 5, 10, 50, 100, 500, 1000];
  let answer = 0;
  let index = 0;
  for (let i = romanArr.length - 1; i >= 0; i--) {
    while (s[index] === romanArr[i]) {
      answer += IntArr[i];
      index++;
    }
    if (s[index] === "C") {
      if (s[index + 1] === "D") {
        index += 2;
        answer += 400;
      } else if (s[index + 1] === "M") {
        index += 2;
        answer += 900;
      }
    } else if (s[index] === "X") {
      if (s[index + 1] === "L") {
        index += 2;
        answer += 40;
      } else if (s[index + 1] === "C") {
        index += 2;
        answer += 90;
      }
    } else if (s[index] === "I") {
      if (s[index + 1] === "V") {
        index += 2;
        answer += 4;
      } else if (s[index + 1] === "X") {
        index += 2;
        answer += 9;
      }
    }
  }

  return answer;
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToIntFast = function (s) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  let prevValue = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    let value = romanValues[s[i]];

    // 끝에서부터 단위를 셀 때, IV 같이 조합해서 4, 9의 값을 나타낼 경우가 없을 때
    // 항상 현재 Index의 값은 이전의 값보다 커야한다.
    // MDCLXVI 1 + 5 + 10 + 50 + 100 + 500 + 1000
    if (value < prevValue) {
      result -= value;
    } else {
      result += value;
    }
    prevValue = value;
  }
  return result;
};
console.log(romanToInt("MCMXCIV"));
