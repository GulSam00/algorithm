/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let i = s.length - 1;
  let answer = 0;
  while (s[i] === " ") i--;

  while (i >= 0) {
    if (s[i] === " ") return answer;
    answer++;
    i--;
  }

  return answer;
};
