// 34분 시작
// 44분 끝

function solution(citations) {
  let answer = 0;
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) answer++;
    else break;
  }
  return answer;
}

console.log(solution([5, 5, 5, 5, 5]));
