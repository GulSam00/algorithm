// 4:09 시작

function solution(n, wires) {
  var answer = -1;
  // 연결된 노드가 하나인 노드를 탐색
  const object = {};
  wires.map((arr) => {
    // object[arr[0]].push(arr[1]);
    // object[arr[1]].push(arr[0]);
    if (object[arr[0]]) object[arr[0]].push(arr[1]);
    else object[arr[0]] = [arr[1]];
    if (object[arr[1]]) object[arr[1]].push(arr[0]);
    else object[arr[1]] = [arr[0]];
  });
  console.log(object);
  return answer;
}

solution(9, [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
]);
