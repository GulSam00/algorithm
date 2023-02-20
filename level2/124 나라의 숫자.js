// 답지 봄
// 뭔소리냐

function solution(n) {
  // 1, 2, 4, 11, 12, 14, 21, 22, 24, 41, 42, 44, 111, 112, 114
  const answer = [];
  while (n > 0) {
    const result = n % 3;
    if (result === 0) {
      answer.push(4);
      n = Math.floor(n / 3) - 1;
    } else {
      answer.push(n % 3);
      n = Math.floor(n / 3);
    }
  }
  return answer.reverse().join("");
}

solution(4);
solution(5);
solution(6);
