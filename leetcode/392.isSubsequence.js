// 9:58 시작

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let [sI, tI] = [0, 0];
  while (t[tI]) {
    console.log(t[tI], s[sI]);
    if (t[tI] === s[sI]) sI++;
    tI++;
  }
  return sI === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"));
