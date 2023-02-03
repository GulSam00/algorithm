// 10:15 시작

// 스택 없이 연속으로 건너는지 체크
// 연속으로 건너는 와중 다리를 건너는 경우도 있다. 스택 써야한다
// function solution(bridge_length, weight, truck_weights) {
//   let answer = 0;
//   let contin;
//   let bridge = [];
//   let curWeight;
//   let index = 0;

//   while (index < truck_weights.length) {
//     contin = 0;
//     curWeight = 0;

//     while (
//       index < truck_weights.length &&
//       curWeight + truck_weights[index] <= weight &&
//       bridge.length < bridge_length
//     ) {
//       bridge.push(0);
//       curWeight += truck_weights[index];
//       index++;
//       contin++;

//       //  앞의 차에 매 차시마다 지연을 주어서 지나갔는지 확인
//       bridge = bridge.map((i) => i + 1);

//       console.log("index : ", index);
//       console.log("bridge : ", bridge);
//       while (bridge[0] === bridge_length) curWeight -= bridge.shift();
//     }

//     bridge = [];

//     // console.log(bridge_length + contin - 1);
//     answer += bridge_length + contin - 1;
//   }
//   return answer;
// }

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  const bridge = new Array(truck_weights.length).fill(0);
  let bridgeSum = 0;
  while (bridge.length) {
    answer++;
    bridge.shift();
    if (bridge.length) bridgeSum = bridge.reduce((cur, acc) => cur + acc);
    else bridgeSum = 0;
    if (truck_weights.length)
      if (bridgeSum + truck_weights[0] <= weight)
        bridge.push(truck_weights.shift());
      else bridge.push(0);
  }
  return answer;
}

console.log(solution(4, 8, [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]));
