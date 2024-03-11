/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let answer = "";
  const numArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanArr = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  for (let i = 0; i < numArr.length; i++) {
    while (num >= numArr[i]) {
      answer += romanArr[i];
      num -= numArr[i];
    }
  }

  return answer;
};

console.log(intToRoman(1994));
