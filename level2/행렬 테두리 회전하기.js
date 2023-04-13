// 3:11 시작
// 4:40 스톱
// 11:35 재개
// 포기

// 구현 문제?
// function solution(rows, columns, queries) {
//   // 실제 배열 만들기
//   const answer = [];

//   // rows : 행, 가로 줄, y
//   // columns : 열, 세로 줄, x
//   const arr = new Array(rows).fill([]).map(() => new Array(columns).fill(0));
//   for (let y = 0; y < rows; y++)
//     for (let x = 0; x < columns; x++) arr[y][x] = y * columns + x + 1;
//   // arr에 값이 아니라 원래의 좌표인 [y, x] 배열을 넣지 말아야 할 이유가 있나?
//   // arr의 값을 실제로 돌릴 게 아니라 좌표의 값을 dir에 기반해서 더해주면 되잖아
//   // query 돌때 arr에 해당하는 값을 저장해두었다가 더해주면 되고

//   console.log(arr);
//   queries.map((query) => {
//     query = query.map((value) => (value -= 1));
//     console.log(query);
//     const [x1, y1, x2, y2] = query;
//     // 맨 처음 값(y1, x1)을 가지고 다음 것부터 시작
//     // 가장 작은 사각형 1, 1, 2, 2 의 처리도 해야 함
//     const xLength = x2 - x1;
//     const yLength = y2 - x1;
//     const sqaureLength =
//       (xLength + 1) * (yLength + 1) - (xLength - 1) * (yLength - 1);
//     console.log(xLength, yLength, sqaureLength);
//     // let memory;
//     let cur = [y1, x1];
//     const coord = [];

//     const dir = [
//       [0, 1],
//       [1, 0],
//       [0, -1],
//       [-1, 0],
//     ];
//     let turn = 0;
//     let cnt = 0;

//     while (turn < 4) {
//       coord.push(cur);

//       cur = cur.map((item, i) => (item += dir[turn][i]));
//       cnt++;

//       // 가로 방향
//       if (turn % 2 === 0 && cnt === xLength) {
//         turn++;
//         cnt = 0;
//       } else if (turn % 2 === 1 && cnt === yLength) {
//         turn++;
//         cnt = 0;
//       }
//     }

//     let [lastY, lastX] = coord[coord.length - 1];
//     let memory = arr[(lastY, lastX)];
//     // 굳이 실제로 회전을 시킬 필요가 있나?
//     coord.map((item, i) => {
//       let [y, x] = item;
//     });
//     const turnList = [];

//     console.log(coord);

//     // for (let y = y1; y <= y2; y++)
//     //   for (let x = x1; x <= x2; x++) {
//     //     if (y === y1 && x === x1) x++;
//     //     if (x === x1 || x === x2 || y === y1 || y === y2) {
//     //       temp = arr[y][x];
//     //       arr[y][x] = memory;
//     //       memory = temp;
//     //     }
//     //   }
//   });
//   // 맨 처음 값(y1, x1)을 건너뛰었기 때문에 임의로 넣어줌
// }

function solution(rows, columns, queries) {
  // 실제 배열 만들기
  const answer = [];

  // rows : 행, 가로 줄, y
  // columns : 열, 세로 줄, x
  const arr = new Array(rows).fill([]).map(() => new Array(columns).fill(0));
  for (let y = 0; y < columns; y++)
    for (let x = 0; x < rows; x++) arr[y][x] = y * rows + x + 1;

  queries.map((query) => {
    query = query.map((value) => (value -= 1));
    let [y1, x1, y2, x2] = query;
    // 맨 처음 값(y1, x1)을 가지고 다음 것부터 시작
    // 가장 작은 사각형 1, 1, 2, 2 의 처리도 해야 함
    const xLength = x2 - x1;
    const yLength = y2 - y1;
    const sqaureLength =
      (xLength + 1) * (yLength + 1) - (xLength - 1) * (yLength - 1);
    console.log(xLength, yLength, sqaureLength);
    // let memory;
    const coord = [];

    const rotate = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
    let turn = 0;
    let cnt = 0;
    let nextY, nextX;
    let memory = arr[y1][x1];

    while (turn < 4) {
      coord.push(memory);

      nextY = y1 + rotate[turn][0];
      nextX = x1 + rotate[turn][1];

      let temp = arr[nextY][nextX];
      arr[nextY][nextX] = memory;
      memory = temp;

      y1 = nextY;
      x1 = nextX;
      cnt++;

      // 가로 방향
      if (turn % 2 === 0 && cnt === xLength) {
        turn++;
        cnt = 0;
      } else if (turn % 2 === 1 && cnt === yLength) {
        turn++;
        cnt = 0;
      }
    }

    coord.push(memory);

    console.log(coord);

    let min = coord[0];
    coord.map((num) => {
      if (num < min) min = num;
    });
    answer.push(min);
  });

  return answer;
}

console.log(solution(100, 97, [[1, 1, 100, 97]]));

// function solution(rows, columns, queries) {
//   // 실제 배열 만들기
//   const answer = [];

//   // rows : 행, 가로 줄, y
//   // columns : 열, 세로 줄, x
//   const arr = new Array(rows).fill([]).map(() => new Array(columns).fill(0));
//   for (let y = 0; y < rows; y++)
//     for (let x = 0; x < columns; x++) arr[y][x] = [y, x];

//   queries.map((query) => {
//     query = query.map((value) => (value -= 1));
//     const [x1, y1, x2, y2] = query;
//     // 맨 처음 값(y1, x1)을 가지고 다음 것부터 시작
//     // 가장 작은 사각형 1, 1, 2, 2 의 처리도 해야 함
//     const xLength = x2 - x1;
//     const yLength = y2 - x1;
//     const sqaureLength =
//       (xLength + 1) * (yLength + 1) - (xLength - 1) * (yLength - 1);
//     console.log(xLength, yLength, sqaureLength);
//     // let memory;
//     const coord = [];

//     const dir = [
//       [1, 0],
//       [0, -1],
//       [-1, 0],
//       [0, 1],
//     ];
//     const rotate = [
//       [0, 1],
//       [1, 0],
//       [0, -1],
//       [-1, 0],
//     ];
//     let turn = 0;
//     let cnt = 0;
//     let curX = x1;
//     let curY = y1;

//     while (turn < 4) {
//       let temp = arr[curY][curX];
//       coord.push(temp);
//       temp = temp.map((item, i) => (item += dir[turn][i]));
//       arr[curY][curX] = temp;
//       curY += rotate[turn][0];
//       curX += rotate[turn][1];
//       cnt++;

//       // 가로 방향
//       if (turn % 2 === 0 && cnt === xLength) {
//         turn++;
//         cnt = 0;
//       } else if (turn % 2 === 1 && cnt === yLength) {
//         turn++;
//         cnt = 0;
//       }
//     }

//     let min = 10000;
//     const revert = coord.map((num) => {
//       const [y, x] = num;
//       const value = y * columns + x + 1;
//       if (value < min) min = value;
//       return value;
//     });

//     answer.push(min);

//     console.log(arr);
//     console.log(revert);
//   });

//   return answer;
// }
