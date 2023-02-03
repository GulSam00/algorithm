// 9:15 시작

// 2차원 배열을 만들고 각 요소마다 그만큼 간 거리를 1씩 더한다.
// function solution(maps) {
//   const visit = maps.map((arrs) => new Array(arrs.length).fill(0));
//   const height = maps.length;
//   const width = maps[0].length;
//   console.log(height, width);

//   function dfs(x, y, count) {
//     // 목적지까지의 모든 경로를 이미 탐색 완료했으면 더는 탐색 필요 없나?
//     // 목적지의 왼쪽, 위쪽을 같이 조사?

//     if (x < 0 || y < 0 || x === width || y === height) return;
//     if (maps[y][x] === 0) return;

//     // 방문을 했으면서 (0이 아니면서) 현재 count보다 작은 값이라면 먼 길로 돌아서 방문했다는 의미. 리턴.
//     if (visit[y][x] && visit[y][x] <= count) return;
//     console.log("X :", x, "Y :", y, " | ", visit[y][x]);

//     count++;
//     visit[y][x] = count;
//     dfs(x + 1, y, count);
//     dfs(x - 1, y, count);
//     dfs(x, y + 1, count);
//     dfs(x, y - 1, count);
//   }
//   dfs(0, 0, 0, "C");

//   console.log(visit);
//   console.log(maps);
//   if (visit[height - 1][width - 1]) return visit[height - 1][width - 1];
//   else return -1;
// }

// 길찾기 알고리즘은 무조건 BPS로? 공평하게 탐색하니까 가장 먼저 도착지에 닿는 루트가 가장 짧은 루트
// DPS였다면 긴 루트가 먼저 도달할 수 있다.
function solution(maps) {
  let visitQueue = [];
  const height = maps.length;
  const width = maps[0].length;
  const direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  visitQueue.push([0, 0, 1]);

  while (visitQueue.length != 0) {
    const [x, y, count] = visitQueue.shift();
    console.log(x, y, count);
    console.log(visitQueue);
    console.log(maps);
    if (x === width - 1 && y === height - 1) return count;

    for (let i = 0; i < 4; i++) {
      let [curX, curY] = direction[i];
      curX += x;
      curY += y;
      if (curX < 0 || curY < 0 || curX === width || curY === height) continue;
      if (maps[curY][curX] === 0) continue;
      maps[curY][curX] = 0;
      visitQueue.push([curX, curY, count + 1]);
    }
  }
  return -1;
}

// console.log(
//   solution([
//     [1, 0, 1, 1, 1],
//     [1, 0, 1, 0, 1],
//     [1, 0, 1, 1, 1],
//     [1, 1, 1, 0, 1],
//     [0, 0, 1, 1, 1],
//   ])
// );

console.log(
  solution([
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1],
  ])
);
