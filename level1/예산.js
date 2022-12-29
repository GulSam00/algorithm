function solution(d, budget) {
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    budget -= d[i];
    if (budget < 0) {
      return i;
    }
  }
  return d.length;
}

console.log(solution([1, 3, 2, 5, 4], 9));

// reduce를 돌아가면서 budget를 배열의 작은 값부터 빼줌.
// 누산기 count는 budget이 남아 있을 경우의 비교 구문에서 참일 결우 1을 더해서 가지고 있음
// function solution(d, budget) {
//     return d.sort((a, b) => a - b).reduce((count, price) => {
//         return count + ((budget -= price) >= 0);
//     }, 0);
// }
