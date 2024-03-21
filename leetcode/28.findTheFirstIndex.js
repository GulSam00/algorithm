/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let i = 0;
  while (i + needle.length <= haystack.length) {
    if (haystack.slice(i, i + needle.length) === needle) return i;
    i++;
  }
  return -1;
};

// faster ver

var fastStrStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

console.log(strStr("hello", "ll"));
