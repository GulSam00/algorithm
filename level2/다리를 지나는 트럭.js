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
  const bridge = new Array(bridge_length).fill(0);
  // 현재 다리의 상태
  let bridgeSum = 0;
  while (bridge.length) {
    answer++;
    // 앞에서부터 원소가 사라지고 뒤에서 트럭이 채워진다.
    bridge.shift();
    if (bridge.length) bridgeSum = bridge.reduce((cur, acc) => cur + acc);
    else bridgeSum = 0;

    // 건너야 할 트럭이 있을 경우 무조건 뒤에 무언가를 채워넣어주고 뒤따라 오는 트럭과의 간격을 구현한다.
    if (truck_weights.length)
      if (bridgeSum + truck_weights[0] <= weight)
        // 무게 한도를 넘치지 않을 경우 트럭이 뒤에 채워진다.
        bridge.push(truck_weights.shift());
      // 무게 한도를 초과할 경우 0이 채워지는데, 이는 이후 트럭과의 간격을 의미하게 된다.
      else bridge.push(0);
  }
  return answer;
}

console.log(solution(10, 20, [1, 5, 4, 2]));
