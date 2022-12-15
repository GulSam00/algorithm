function solution(s) {
  const arr = s.split("").sort();
  const answer = [];
  let i = 0;
  while (i < arr.length) {
    const correct = arr.filter((v) => v === arr[i]).length;
    if (correct === 1) answer.push(arr[i]);
    i += correct;
  }
  return answer.join("");
}

console.log(solution("ksekkset"));
