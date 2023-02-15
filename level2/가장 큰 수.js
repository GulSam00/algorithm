// 11:45 시작
// // 포기

// function solution(numbers) {
//   // 자리수가 적을 수록 우선순위, 98이라고 하더라도 9, 9 보다는 작기 때문
//   // 2자리 이상부터는 수치를 비교. 34보다는 411이 더 크기 때문
//   // 하지만 3, 2, 1 같이 작은 수 밖에 안 남았을 땐? 맨 앞자리 수만 비교하는 게 낫나?
//   // 35 > 345, 35 > 351

//   // 9부터 1씩 줄어가며 값을 조회.
//   // 앞의 자리수가 동일한 값끼리 정렬을 진행. 가장 마지막 자리의 수(length - 1)가 높은 순 내림차순
//   // 700, 90 같이 0으로 끝나는 요소는 가장 마지막으로 가야한다.

function solution(numbers) {
  var answer = "";
  numbers = numbers.map((i) => i + "");
  numbers.sort(condition); //정렬
  numbers.forEach((num) => {
    answer += num;
  });
  return Number(answer) === 0 ? "0" : answer;
}

function condition(a, b) {
  if (a + b < b + a) return 1;
  if (a + b > b + a) return -1;
  if (a + b === b + a) return 0;
}

// 12, 19, 1

// 112 < 121
// 1912 > 1219
// 191 > 119

console.log("answer ", solution([212, 21]));

// [232,23] : 23/232 : (23232)
// [212,21] : 212/21 : (21221)
// [70,0,0,0,0] : 70/0/0/0/0 : (700000)
