function solution(n) {
  const answer = [];
  let i = 0;
  while (++i <= n) {
    if (n % i === 0) answer.push(i);
  }
  return answer;
}
