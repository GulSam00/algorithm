// 21:08 ~ 21:30

// 실패 코드
/*
function solution(diffs, times, limit) {
  let answer = 1;
  let curLimit;
  while (true) {
    curLimit = 0;
    for (let i = 0; i < diffs.length; i++) {
      if (diffs[i] > answer)
        curLimit += (diffs[i] - answer) * (times[i] + times[i - 1]);
      curLimit += times[i];
    }
    if (curLimit <= limit) {
      return answer;
    }
    answer++;
  }
}
*/
function solution(diffs, times, limit) {
  let left = 1;
  let right = 1;
  for (let i = 0; i < diffs.length; i++)
    right = right < diffs[i] ? diffs[i] : right;

  const checkCanSolve = (level) => {
    let totalTime = 0;

    for (let i = 0; i < diffs.length; i++) {
      if (diffs[i] > level)
        totalTime += (diffs[i] - level) * (times[i] + times[i - 1]);
      totalTime += times[i];
      if (totalTime > limit) {
        return false;
      }
    }
    return totalTime <= limit;
  };

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (checkCanSolve(mid)) right = mid;
    else left = mid + 1;
  }

  return left;
}

console.log(solution([1, 4, 4, 2], [6, 3, 8, 2], 59));
