// 16:00 시작
// 18:00 종료

// bfs 하기 싫어

function solution(land) {
  // 시추관은 수직으로 떨어지기 때문에 사실상 일차원 상의 가로로 된 석유라고 생각해도 무방 -> 아니다;; 붙어있는 석유끼리는 전부 같은 석유니 무조건 파싱 해야함

  // const compress_oil = new Array(land[0].length).fill(0);

  const max_x = land[0].length;
  const max_y = land.length;

  const parse_oil = [];
  var amount = 0;
  var x_start = 0;
  var x_end = 0;

  // [석유 시작되는 x지점, 석유 끝나는 y지점, 석유 총량] 형태의 배열로 뱉어야 한다.
  // 파싱 할 때 x+1, y+1 2방향으로 전진하면서 발견할 때마다 실시간으로 제거?

  //   const bfs = (x, y, visit) => {
  //     const q = [];
  //     const visit = [];
  //     q.push([x, y]);

  //     while ()
  //   }

  const collect_oil = (x, y) => {
    // console.log("X : ", x, "Y : ", y, "양 : ", amount);

    if (land[y][x] !== 1) return;
    else {
      if (x < x_start) x_start = x;
      else if (x > x_end) x_end = x;
      amount++;
      land[y][x] = -1;
    }
    if (x < max_x - 1) collect_oil(x + 1, y);
    if (x > 0) collect_oil(x - 1, y);
    if (y > 0) collect_oil(x, y - 1);
    if (y < max_y - 1) collect_oil(x, y + 1);
    return;
  };

  for (let y = 0; y < max_y; y++) {
    for (let x = 0; x < max_x; x++) {
      if (land[y][x] === 1) {
        const visit = [];
        x_start = x;
        x_end = x;
        collect_oil(x, y);
        bfs(x, y, visit);
        // parse_oil.push([x_start, x_end, amount]);
        amount = 0;
      }
    }
  }

  const total_x = new Array(max_x).fill(0);

  parse_oil.map((item) => {
    for (let i = item[0]; i <= item[1]; i++) total_x[i] += item[2];
  });

  total_x.sort((a, b) => b - a);

  return total_x[0];
}

console.log(
  solution([
    [0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 1, 1],
  ])
);
