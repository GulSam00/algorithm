// 3:41 시작
// 4:20 끝
// 좋은 난이도, 술술 풀렸다! 5점

// // 시간 초과
// function solution(topping) {
//     let answer = 0;
//     let ballance;
//     for (let i = 1; i < topping.length; i++) {
//       ballance = 0;
//       const left = topping.slice(0, i);
//       const right = topping.slice(i);
//       const leftCount = left.filter((item, i) => left.indexOf(item) === i);
//       const rightCount = right.filter((item, i) => right.indexOf(item) === i);
//       if (leftCount.length === rightCount.length) answer++;

//     }
//     return answer;
//   }

// // 시간 초과
// function solution(topping) {
//   let answer = 0;
//   let ballance;
//   for (let i = 1; i < topping.length; i++) {
//     ballance = 0;
//     const left = topping.slice(0, i);
//     const right = topping.slice(i);
//     const leftCount = {};
//     const rightCount = {};
//     left.map((key) => (leftCount[key] = 1));
//     right.map((key) => (rightCount[key] = 1));
//     for (let topping in leftCount) ballance++;
//     for (let topping in rightCount) ballance--;
//     if (ballance === 0) answer++;
//   }
//   return answer;
// }

// 직접 탐색 - 코드 오류?
// function solution(topping) {
//   let answer = 0;
//   let ballance;
//   for (let i = 1; i < topping.length; i++) {
//     ballance = 0;
//     const count = {};
//     for (let j = 0; j < topping.length; j++) {
//       // 왼쪽에 해당
//       if (j < i) {
//         count[topping[j]] = 1;
//       } else {
//         if (count[topping[j]]) {
//           count[topping[j] + "temp"] = 1;
//         }
//         count[topping[j]] = -1;
//       }
//     }
//     for (let topping in count) ballance += count[topping];
//     if (ballance === 0) answer++;
//   }
//   return answer;
// }

// 정보를 계속 저장
function solution(topping) {
  let answer = 0;
  const left = {};
  const right = {};
  let cntL = 0;
  let cntR = 0;

  topping.map((i) => (right[i] = right[i] ? right[i] + 1 : 1));
  for (let top in right) cntR++;

  // 하나씩 right에서 left로 이동하며 검사
  // left에는 추가, right에서는 1씩 빼줌
  // right에서 하나도 남지 않게 된다면 cntR을 빼줌
  // 새로운 거면 cntL을 더해줌
  // left는 늘어만 갈 것이고 right는 줄어만 갈 것
  topping.map((cur) => {
    if (!left[cur]) cntL++;
    left[cur] = 1;
    right[cur]--;
    if (right[cur] === 0) cntR--;
    if (cntL === cntR) answer++;
  });

  return answer;
}

console.log(solution([1, 1, 2, 1, 3, 1, 4, 1, 2]));
