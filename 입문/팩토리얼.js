const getFactorial = (n) => {
  if (n === 1) return 1;
  return n * getFactorial(n - 1);
};

function solution(n) {
  if (n === 0) return 1;

  let answer = 1;
  while (getFactorial(answer) <= n) answer++;
  return answer - 1;
}
