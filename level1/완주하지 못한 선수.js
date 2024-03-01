// 시작 7분
// 중지 30분
// 재개 35분

// 시간 초과!

// function solution(participant, completion) {
//     completion.map((user) => {
//       participant.splice(participant.indexOf(user), 1);
//     });
//     return participant[0];
//   }

function solution(participant, completion) {
  const hash = [];

  participant.map((user) => {
    hash[user] = hash[user] ? hash[user] + 1 : 1;
  });
  completion.map((user) => {
    hash[user]--;
  });
  for (let data in hash) if (hash[data]) return data;
}

console.log(solution(["leo", "kiki", "eden", "user"], ["eden", "kiki"]));

//  string 자료형의 key에 해당하는 공간에 string 자료형의 value를 집어넣은 것

// map을 이용한 해시
function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    // key값의 value를 +1, -1 해줌으로써 해시 구현
    // string이 key 값이 되기 때문에 중복 처리도 문제없이 가능
    // 최종적으로 key의 값이 1이 된 사람이 완주하지 못한 사람이 된다
    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return "nothing";
}

console.log(solution(["leo", "eden", "user", "dasd"], ["eden", "kiki"]));

// sort를 이용한 풀이
// function solution(participant, completion) {

//     participant.sort();
//     completion.sort();

//     for(let i in participant) {
//         if(participant[i] !== completion[i]) return participant[i];
//     }
// }
