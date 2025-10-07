// 19:30 ~ 19 : 55
// 20:15 ~ 20 : 55
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

const wordCombine = [];
const answer = [];
let word_len;
let max_len;

const getCombine = (words, curWord) => {
  if (!words.length) {
    wordCombine.push(curWord);
    return;
  }
  words.map((word) => {
    getCombine(
      words.filter((item) => item !== word),
      curWord + word
    );
  });
};

const getSubWord = (words, curWord, index, str) => {
  if (curWord === max_len) {
    answer.push(index - max_len);
    return;
  }
  // if (index >= str.length - max_len - word_len) {
  //   return;
  // }
  while (index < str.length - word_len) {
    console.log(curWord, " + ", str.substr(index, word_len));
    const temp = curWord + str.substr(index, word_len);
    console.log("TEMP : ", temp);
    words.map((word) => {
      console.log(temp, curWord + word);
      if (temp === curWord + word) {
        console.log(temp, " correct! ");
        getSubWord(
          words.filter((item) => item !== word),
          temp,
          index + word_len,
          str
        );
      }
    });
    index++;
  }
};

var findSubstring = function (s, words) {
  word_len = words[0].length;
  max_len = word_len * words.length;

  // getCombine(words, "");

  getSubWord(words, "", 0, s);
  console.log(wordCombine);
};

findSubstring("barfoothefoobarman", ["foo", "bar", "qwe"]);
