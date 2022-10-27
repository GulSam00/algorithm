function solution(n) {
  let i = 0;
  const answer = [];

  while (i <= n) {
    if (i % 2) answer.push(i);
    i++;
  }
  return answer;
}

console.log(solution(6));
