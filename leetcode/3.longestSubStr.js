// 17:39 ~
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let answer = 0;
  let l = 0;
  let r = 0;
  let hash = {};

  while (r < s.length) {
    if (hash[s[r]]) hash[s[r]]++;
    else {
      hash[s[r]] = 1;
    }
    while (1 < hash[s[r]] && l < r) {
      hash[s[l]]--;
      l++;
    }
    r++;
    answer = answer < r - l ? r - l : answer;
  }

  console.log(hash);

  return answer;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
