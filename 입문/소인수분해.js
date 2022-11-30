function solution(n) {
  const answer = [];
  let i = 2;
  while (n > 1) {
    if (n % i === 0) {
      answer.push(i);
      n /= i;
      i = 2;
    } else i++;
  }

  const set = new Set(answer.sort((a, b) => a - b));
  return [...set];
}
console.log(solution(12324));
