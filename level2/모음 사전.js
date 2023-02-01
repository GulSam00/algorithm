// 모음 사전

function solution(word) {
  let arr = ["", "A", "E", "I", "O", "U"];

  let result = [];

  function recurtion(n, str) {
    // console.log(n, str);
    if (n === 0) {
      result.push(str);
      return;
    }
    for (let i = 0; i < 6; i++) {
      recurtion(n - 1, `${str}${arr[i]}`);
    }
  }
  recurtion(5, "");
  const data = [...new Set(result)].sort();

  return data.indexOf(word);
}

console.log(solution("AA"));
