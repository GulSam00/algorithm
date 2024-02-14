// 18:05 시작
// 18:10 끝
// 너무 쉽자너...

function solution(A, B) {
  var answer = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }
  return answer;
}

console.log(solution([1, 4, 2], [5, 4, 4]));
