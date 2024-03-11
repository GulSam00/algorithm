/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = strs[0];
  let i = 1;
  while (i < strs.length) {
    console.log("prefix : ", prefix);
    if (prefix !== strs[i].slice(0, prefix.length)) {
      i = 1;
      prefix = strs[0].slice(0, prefix.length - 1);
      continue;
    }
    i++;
  }
  return prefix;
};

console.log(longestCommonPrefix(["dog", "racecar", "car"]));
