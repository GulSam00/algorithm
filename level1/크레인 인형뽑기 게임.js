// 1분 시작
// 20분 스탑
// 23분 재개
// 37분 스탑

// 3분 재개
// 30분 종료

// 1시간 소요

// 스택 활용
// 3, 1, 1, 3 같이 밑에 깔린 것도 고려

function checkPop(stack) {
  console.log("stack : ", stack);
  if (stack.length > 1 && stack[stack.length - 1] === stack[stack.length - 2])
    return true;

  return false;
}

function solution(board, moves) {
  const stack = [];
  let answer = 0;
  const notZero = new RegExp("[1-9]");

  moves.map((choice) => {
    const line = board.map((arr) => {
      return arr[choice - 1];
    }); // 세로줄

    const pickUpIndex = line.join("").search(notZero);
    const pickUp = line[pickUpIndex];
    if (pickUp) {
      board[pickUpIndex][choice - 1] = 0;
      stack.push(pickUp);
      while (checkPop(stack)) {
        stack.pop();
        stack.pop();
        answer += 2;
        // 바보같이 +1을 하고 있었다
      }
      // console.log("stack : ", stack);
    }
  });
  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],

    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
