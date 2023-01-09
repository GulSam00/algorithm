// 45분 시작
// 15분 끝

// 30분 소요

// DFS

let answer = 0;

function dfs(numArrs, curIndex, acc, target) {
  if (curIndex === numArrs.length) {
    // console.log("ACC : ", acc);
    if (acc === target) answer++;
    return;
  }
  //   console.log("index : ", curIndex, " | ", acc, " += ", numArrs[curIndex]);
  dfs(numArrs, curIndex + 1, acc + numArrs[curIndex], target);
  dfs(numArrs, curIndex + 1, acc - numArrs[curIndex], target);
}

function solution(numbers, target) {
  dfs(numbers, 0, 0, target);
  return answer;
}

console.log(solution([4, 1, 2, 1], 4));
