// 2시 24분 시작
// 현재 4시 56분

// 1.20일 1시간 추가해서 겨우 해결

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

  const eraseBoard = new Array(m).fill(0).map(() => new Array(n).fill(1));

  board = board.map((arr) => arr.split(""));

  function checkPop(i, j) {
    if (
      board[i][j] === "0" ||
      i === m - 1 ||
      j === n - 1 ||
      board[i][j] != board[i + 1][j] ||
      board[i][j] != board[i][j + 1] ||
      board[i][j] != board[i + 1][j + 1]
    )
      return;

    handlePop(i, j);
    handlePop(i + 1, j);
    handlePop(i, j + 1);
    handlePop(i + 1, j + 1);
    isContinue = true;
    // }
  }

  function handlePop(y, x) {
    eraseBoard[y][x] = 0;
    console.log(y, x);
    console.log(eraseBoard);
  }

  function cleanRow(bottomY, x) {
    let keepClean = false;

    for (let y = bottomY; y > 0; y--) {
      if (board[y][x] === "0") {
        for (let findY = y - 1; findY >= 0; findY--) {
          if (board[findY][x] !== "0") {
            // console.log("change : ", y, findY);
            keepClean = true;
            let temp = board[y][x];
            board[y][x] = board[findY][x];
            board[findY][x] = temp;
            break;
          }
        }
      }
    }

    if (keepClean) cleanRow(bottomY, x);
  }

  while (isContinue) {
    isContinue = false;

    // eraseBoard = new Array(m).fill(new Array(n).fill(1));

    console.log("board, ", board);

    // match check
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        checkPop(i, j);
      }
    }

    // erase
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (eraseBoard[i][j] === 0) {
          eraseBoard[i][j] = 1;
          answer++;
          board[i][j] = "0";
        }
      }
    }

    console.log("isErased : ", eraseBoard);
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

const A = new Array(3).fill(0).map(() => new Array(3).fill(1));
// A[0], A[1], A[2]는 map으로 생성된 각기 주소가 다른 배열.

const B = new Array(3).fill(new Array(3).fill(1));
// B[0], B[1], B[2]는 new Array(3)으로 생성된 하나의 배열을 전부 참조한다.

// A[1][1] = 0;
// B[1][0] = 0;
// console.log("A : ", A, "B : ", B);

console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]));

// solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]);

// solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]);

// console.log(
//   solution(6, 6, ["IIIIAA", "IIIAAA", "IIIAAI", "IAAIII", "AAAIII", "AAIIII"])
// );
// 밑에서부터 체크

// console.log(solution(7, 2, ["AA", "BB", "BB", "AA", "ZZ", "ZZ", "CC"]));
