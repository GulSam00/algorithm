// 17:23 시작
// 18:
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  // 단어 사이에는 최소 하나의 간격
  // maxwidth가 넘으면 다음 줄
  // 그리디한 접근
  // 간격 사이는 최대한 동일하게, 안되면 왼쪽을 더 크게
  let i = 0;
  const answer = [];

  let curWidth;
  let curStr;
  while (i < words.length) {
    curStr = [];
    curWidth = 0;

    while (i < words.length && curWidth <= maxWidth) {
      curStr.push(words[i]);
      curWidth += words[i].length;
      i++;
    }

    while (curWidth + curStr.length - 1 > maxWidth) {
      const pop = curStr.pop();
      curWidth -= pop.length;
      i--;
    }

    console.log("cur : ", curStr);
    console.log("answer : ", answer);
    if (i === words.length) {
      answer.push(curStr.join(" ").padEnd(maxWidth));
    } else {
      let j = 0;
      while (curWidth < maxWidth) {
        const index = curStr.length - 1 <= 0 ? 0 : j % (curStr.length - 1);
        curStr[index] += " ";
        curWidth++;
        j++;
      }
      console.log(curStr);
      answer.push(curStr.join(""));
    }
  }
  return answer;
};
console.log(
  fullJustify(
    [
      "Science",
      "is",
      "what",
      "we",
      "understand",
      "well",
      "enough",
      "to",
      "explain",
      "to",
      "a",
      "computer.",
      "Art",
      "is",
      "everything",
      "else",
      "we",
      "do",
    ],
    20
  )
);
