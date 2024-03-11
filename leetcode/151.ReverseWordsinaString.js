/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let arr = s.split(" ");
  arr = arr.filter((i) => i !== "");
  let answer = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    answer += " ";
    answer += arr[i];
  }

  return answer;
};

console.log(reverseWords("a good   example"));
