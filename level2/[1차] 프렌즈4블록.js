// 24분 시작
// 1시간 반 소요

// 완전 탐색. 0,0부터 시작해서 2중 for문
// x, y / x + 1, y / x, y + 1 / x + 1, y + 1 비교
// 일치하면 해당 범위 값 0으로
// 일치하는 게 있더라도 터지는 건 한번에 진행해야 함
// 터진 후 아래로 떨어지게 세로로 처리
// 하나라도 터지는 게 없다면 종료

// m : y / n : x

function solution(m, n, board) {
  let answer = 0;
  let isContinue = true;

  let isSame = /(\w)\1{3,}/;

  board = board.map((arr) => arr.split(""));

  function checkPop(i, j) {
    console.log(i, j);
    if (board[i][j] === "0" || i < 0 || j < 0 || i === m - 1 || j === n - 1)
      return;
    if (
      isSame.test(
        board[i][j] + board[i + 1][j] + board[i][j + 1] + board[i + 1][j + 1]
      )
    ) {
      checkPop(i + 1, j);
      checkPop(i, j + 1);
      checkPop(i + 1, j + 1);

      handlePop(i, j);
      handlePop(i + 1, j);
      handlePop(i, j + 1);
      handlePop(i + 1, j + 1);
      isContinue = true;
    }
  }

  function handlePop(y, x) {
    if (board[y][x] !== "0") {
      answer++;
      board[y][x] = "0";
    }
  }

  //   function cleanRow(bottomY, x) {
  //     let changeY = bottomY;

  //     for (let y = bottomY; y > 0; y--) {
  //       if (board[y][x] === "0") {
  //         for (let findY = y - 1; findY >= 0; findY--)
  //           if (board[findY][x] !== "0") {
  //             changeY = findY;

  //             let temp = board[y][x];
  //             board[y][x] = board[findY][x];
  //             board[findY][x] = temp;
  //           }
  //       }
  //     }

  //     if (changeY !== bottomY) cleanRow(changeY, x);
  //   }

  function cleanRow(bottomY, x) {
    let isContinue = false;

    for (let y = bottomY; y > 0; y--) {
      if (board[y][x] === "0") {
        for (let findY = y - 1; findY >= 0; findY--) {
          if (board[findY][x] !== "0") {
            // console.log("change : ", y, findY);
            isContinue = true;
            let temp = board[y][x];
            board[y][x] = board[findY][x];
            board[findY][x] = temp;
            break;
          }
        }
      }
    }

    if (isContinue) cleanRow(bottomY, x);
  }

  while (isContinue) {
    isContinue = false;

    console.log("board, ", board);

    // match check
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        checkPop(i, j);
      }
    }
    console.log("BOOM, ", board);

    // clean board
    // 세로로 밑에서부터
    for (let i = 0; i < n; i++) {
      cleanRow(m - 1, i);
    }
    console.log("clean, ", board);

    console.log("answer : ", answer);
  }

  return answer;
}

// solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]);

// solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]);

console.log(
  solution(6, 6, ["IIIIAA", "IIIAAA", "IIIAAI", "IAAIII", "AAAIII", "AAIIII"])
);
// 밑에서부터 체크

// console.log(solution(7, 2, ["AA", "BB", "BB", "AA", "ZZ", "ZZ", "CC"]));
