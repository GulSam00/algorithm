// 16 : 55 시작

function solution(targets) {
  let answer = 1;
  targets.sort((a, b) => a[0] - b[0]);
  console.log(targets);
  let i = 0;
  let min = targets[i][0];
  let max = targets[i][1];

  for (let i = 1; i < targets.length; i++) {
    let curMin = targets[i][0];
    let curMax = targets[i][1];
    if (min <= curMin && curMin < max) {
      if (curMin > min) min = curMin;
      if (curMax < max) max = curMax;
    } else {
      min = curMin;
      max = curMax;
      answer++;
    }
  }

  return answer;
}

console.log(
  solution([
    [1, 2],
    [1, 7],
    [3, 4],
  ])
);
