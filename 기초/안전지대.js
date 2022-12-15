// const checkMine = (board, x, y) => {
//   let minX = x === 0 ? x : x - 1;
//   let maxX = x === board.length - 1 ? x : x + 1;
//   let minY = y === 0 ? y : y - 1;
//   let maxY = y === board[0].length - 1 ? y : y + 1;
//   for (let i = minX; i <= maxX; i++) {
//     for (let j = minY; j <= maxY; j++) {
//       if (board[i][j] === 1) return 0;
//     }
//   }
//   return 1;
// };

// function solution(board) {
//   let answer = 0;
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[i].length; j++) {
//       answer += checkMine(board, i, j);
//     }
//   }
//   return answer;
// }

function solution(board) {
  let answer = 0;

  const visited = Array.from({ length: board.length }, () =>
    Array(board.length).fill(0)
  );

  const dx = [0, -1, -1, -1, 0, 1, 1, 1];
  const dy = [1, 1, 0, -1, -1, -1, 0, 1];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) bfs([i, j]);
    }
  }

  function bfs([i, j]) {
    visited[i][j] = 1; // 지뢰가 있는 곳은 1로 표시
    const queue = [[i, j]];
    const [x, y] = queue.shift();
    for (let k = 0; k < 8; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];
      // 현재 좌표의 8방향을 탐색
      if (nx < 0 || nx >= board.length || ny < 0 || ny >= board.length)
        continue;
      if (visited[nx][ny] === 0) {
        visited[nx][ny] = 2; // 지뢰 주변은 2로 표시
        queue.push([nx, ny]); // 다음으로 탐색할 좌표
      }
      console.log("현재 큐", queue);
      console.log("전체 방문 배열", visited);
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (visited[i][j] === 0) answer++;
    }
  }

  return answer;
}

console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ])
);
