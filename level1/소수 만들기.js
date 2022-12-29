function solution(nums) {
  let answer = 0;
  let n = 3000; // 최대 조합 가능 수
  const prime = new Array(n).fill(true); // 소수 판별 배열
  for (let i = 2; i < n; i++) {
    if (prime[i]) {
      for (let j = i * i; j < n; j += i) {
        prime[j] = false;
      }
    }
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (prime[nums[i] + nums[j] + nums[k]]) answer++;
      }
    }
  }
  return answer;
}
