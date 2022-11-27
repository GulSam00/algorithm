function solution(numbers, k) {
  return numbers[((k - 1) * 2) % numbers.length];
  // k번째 공을 던지는 사람이라면, k - 1 번째 공을 던진 사람이 던진 공을 받는다.
  // k가 1이라면 첫번째 공을 던지는 사람, 즉 실제로 공을 던지지 않게 된다.
}
