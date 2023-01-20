// isClean 제귀

function solution(m, n, board) {
  let answer = 0;
  let isContinue = true;

  eraseBoard = new Array(m).fill(0).map(() => new Array(n).fill(1));

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

    checkPop(i + 1, j);
    checkPop(i, j + 1);
    checkPop(i + 1, j + 1);

    handlePop(i, j);
    handlePop(i + 1, j);
    handlePop(i, j + 1);
    handlePop(i + 1, j + 1);
    isContinue = true;
  }

  function handlePop(y, x) {
    eraseBoard[y][x] = 0;
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

    // clean board
    // 세로로 밑에서부터
    for (let i = 0; i < n; i++) {
      cleanRow(m - 1, i);
    }
  }
  return answer;
}

// isClean 제거 버전

function solution(m, n, board) {
  let answer = 0;
  let isContinue = true;

  eraseBoard = new Array(m).fill(0).map(() => new Array(n).fill(1));

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

    checkPop(i + 1, j);
    checkPop(i, j + 1);
    checkPop(i + 1, j + 1);

    handlePop(i, j);
    handlePop(i + 1, j);
    handlePop(i, j + 1);
    handlePop(i + 1, j + 1);
    isContinue = true;
    // }
  }

  function handlePop(y, x) {
    eraseBoard[y][x] = 0;
  }

  while (isContinue) {
    isContinue = false;

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

    // clean board
    // 배열로 세로줄 접근

    for (let x = 0; x < n; x++) {
      // cleanRow(m - 1, i);
      let arr = new Array(m).fill("0");
      let count = m - 1;
      for (let y = m - 1; y >= 0; y--) {
        if (board[y][x] != "0") arr[count--] = board[y][x];
      }
      for (let y = 0; y < m; y++) board[y][x] = arr[y];
    }
  }

  return answer;
}

// 재귀 제거
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
  }

  function handlePop(y, x) {
    eraseBoard[y][x] = 0;
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

    // clean board
    // 세로로 밑에서부터
    for (let i = 0; i < n; i++) {
      cleanRow(m - 1, i);
    }
  }

  return answer;
}
