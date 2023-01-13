// 36분 시작
// 0분 끝

// // 시간 초과
// function solution(land) {

//   const answer = land.map((landArr) => {
//     const sorted = [...landArr].sort((a, b) => b - a);
//     const curIndex = landArr.indexOf(sorted[0]);
//     if (prevIndex === curIndex) prevIndex = landArr.indexOf(sorted[1]);
//     else prevIndex = curIndex;
//     return landArr[prevIndex];
//   });
//   console.log(answer);
//   return answer.reduce((acc, cur) => acc + cur);
// }

// 다이나믹 프로그래밍

function getBest(arr, expectIndex) {
  const checkArr = arr.filter((_, i) => i !== expectIndex);
  return Math.max(checkArr[0], checkArr[1], checkArr[2]);
}

function solution(land) {
  for (let i = 1; i < land.length; i++) {
    console.log(land[i]);
    land[i][0] += getBest(land[i - 1], 0);
    land[i][1] += getBest(land[i - 1], 1);
    land[i][2] += getBest(land[i - 1], 2);
    land[i][3] += getBest(land[i - 1], 3);
  }
  const final = land[land.length - 1];
  return final.sort((a, b) => b - a)[0];
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 100],
    [4, 3, 2, 1],
  ])
);
// function solution(land) {
//   let answer = 0;
//   const dp = [land[0]];

//   for (let i = 1; i < land.length; i++) {
//     const column = [];

//     column.push(
//       Math.max(dp[i - 1][1], dp[i - 1][2], dp[i - 1][3]) + land[i][0]
//     );
//     column.push(
//       Math.max(dp[i - 1][0], dp[i - 1][2], dp[i - 1][3]) + land[i][1]
//     );
//     column.push(
//       Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][3]) + land[i][2]
//     );
//     column.push(
//       Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]) + land[i][3]
//     );
//     dp.push(column);
//     console.log(dp);
//   }

//   return Math.max(
//     dp[land.length - 1][0],
//     dp[land.length - 1][1],
//     dp[land.length - 1][2],
//     dp[land.length - 1][3]
//   );
// }
