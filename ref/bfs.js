function bfs(graph, start, visited) {
  const queue = [start];
  visited.add(start);

  while (queue.length > 0) {
    const student = queue.shift(); // 큐에서 학생을 꺼냄
    for (const friend of graph[student]) {
      if (!visited.has(friend)) {
        visited.add(friend);
        queue.push(friend); // 친구를 큐에 추가
      }
    }
  }
}

function minFriendships(n, friendships) {
  const graph = new Map();

  // 그래프 생성
  for (const [a, b] of friendships) {
    if (!graph.has(a)) graph.set(a, []);
    if (!graph.has(b)) graph.set(b, []);
    graph.get(a).push(b);
    graph.get(b).push(a);
  }

  const visited = new Set();
  let components = 0;

  // 각 학생에 대해 BFS 수행
  for (let student = 1; student <= n; student++) {
    if (!visited.has(student)) {
      bfs(graph, student, visited);
      components++; // 새로운 연결 요소 발견
    }
  }

  return components;
}

// 예시 사용
const n = 5;
const friendships = [
  [1, 2],
  [2, 3],
  [4, 5],
];
console.log(minFriendships(n, friendships)); // 결과 출력
