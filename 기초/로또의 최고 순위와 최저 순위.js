// 시작 12분
// 종료 19분
// 소요시간 7분

function culcRank(correct, zeros) {
  const rank = 7 - (correct + zeros);
  if (rank > 6) return 6;
  return rank;
}

function solution(lottos, win_nums) {
  const correct = lottos.filter((v) => win_nums.includes(v)).length;
  const zeros = lottos.filter((v) => v === 0).length;
  console.log(correct, zeros);
  return [culcRank(correct, zeros), culcRank(correct, 0)];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
