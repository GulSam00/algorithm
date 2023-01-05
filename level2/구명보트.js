// 48분 시작
// 5분 중단 - 17분

// 40분 시작
// 47분 끝

// 그리드 탐색
// 그때그때 최선의 선택
// 특정 조건에서 사용 가능

// [30, 40, 50, 60], 100에서 에러.
function solution(people, limit) {
  // 최대 2명이기에, 가장 무거운 사람
  people.sort((a, b) => b - a);
  return Math.round(
    people.reduce((acc, cur) => {
      if (cur <= limit / 2) return acc + 0.5;
      else return acc + 1;
    }, 0)
  );
}

// // while 그리디 - 시간 초과
function solution1(people, limit) {
  // 최대 2명이기에, 가장 무거운 사람
  people.sort((a, b) => a - b);
  let ride = 0;

  let sum = 0;
  while (people.length) {
    let first = 0;
    let last = people.length - 1;

    // console.log(people[first] + people[last]);
    // console.log(people);
    while (people[first + 1] + people[last] <= limit) first++;
    if (people[first] + people[last] <= limit) {
      sum += limit - people[first] + people[last];

      people.splice(0, 1);
    } else sum += limit - people[last];
    people.splice(-1, 1);
    ride++;
  }
  console.log("sum : ", sum);
  return ride;
}

// first와 end index를 점점 가운데로
function solution2(people, limit) {
  // 최대 2명 탑승 가능
  let sum = 0;

  people.sort((a, b) => a - b);
  //   console.log(people);
  let first = 0;
  let last = people.length - 1;
  let ride = 0;

  while (first <= last) {
    if (people[first] + people[last] <= limit) {
      first++;
      sum += limit - people[first] + people[last];
    } else sum += limit - people[last];
    last--;
    ride++;
  }
  console.log("sum : ", sum);
  return ride;
}

console.log("1 ", solution1([10, 15, 20, 70, 80, 80, 85], 100));
console.log("2 ", solution2([10, 15, 20, 70, 80, 80, 85], 100));
