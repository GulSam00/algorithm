function solution(a, b, n) {
  let answer = 0;
  let gotten = 0;
  let left = 0;

  while (n >= a) {
    gotten = Math.floor(n / a);
    answer += gotten * b;
    n = b * gotten + (n % a);
  }
  return answer;
}

console.log(solution(3, 2, 10));
