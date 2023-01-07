// 29분 시작
// 3분 끝

// pop 맨 끝 제거
// push 맨 끝 추가
// shift 맨 앞 제거
// unshift 맨 앞 추가

function solution(priorities, location) {
  // 모든 문서를 프린트해야 한다
  let printTime = 1;
  let max = Math.max(...priorities);
  while (true) {
    console.log("max :", max, "check : ", priorities[0]);
    console.log(location);
    console.log(priorities);
    if (priorities[0] < max) {
      priorities.push(priorities.shift());
    } else {
      if (location === 0) {
        return printTime;
      }
      priorities.shift();
      max = Math.max(...priorities);
      printTime++;
    }
    location = location === 0 ? priorities.length - 1 : location - 1;
  }
}

console.log("답 : ", solution([1, 1, 9, 1, 1, 1], 0));
