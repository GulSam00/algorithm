function solution(n) {
  let answer = 0;

  // 절반이 가장 큰 약수이므로 절반까지만 검사
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) answer += i;
  }
  return answer + n;
}
