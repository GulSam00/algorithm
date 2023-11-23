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

  let n1 = 0,
    n2 = 0;
  for (node in object) {
    console.log(object[node]);
    if (object[node].length > n1) {
      n2 = n1;
      n1 = node;
    }
  }
  console.log(n1, n2);
  console.log(object[n1], object[n2]);

  // 간선(엣지)가 가장 많은 2개의 노드를 비교, 일치하는 노드가 없고 서로가 유일한 간선일 경우 절단
  // 절단한 후 노드 개수를 셀 때는 가장 많은 노드부터 깊이 우선 탐색 방식? 한 번 방문할 때 스택이든 뭐든 저장해서 모든 연결 노드 개수를 찾을 수 있도록
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
