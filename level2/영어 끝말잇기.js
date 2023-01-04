// 11분 시작
// 27분 끝

function solution(n, words) {
  for (let index = 1; index < words.length; index++) {
    const curWord = words[index];
    const lastEnd = words[index - 1];
    if (
      curWord.startsWith(lastEnd[lastEnd.length - 1]) &&
      words.indexOf(curWord) === index
    )
      continue;
    return [(index % n) + 1, Math.floor(index / n) + 1];
  }
  return [0, 0];
}
