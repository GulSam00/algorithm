function getFactorial(n, dst) {
  if (dst === 0) return n;
  return getFactorial(n * 2, dst - 1);
}

function solution(n, t) {
  return getFactorial(n, t);
}

console.log(solution(7, 15));
