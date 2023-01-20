// 2분 시작
// 22분 종료

// x, y 각각의 좌표로 문자열을 만듬
// -5, -5는 0, 0 / 0, 0은 5, 5 / 5, 5는 10, 10
// 이동할때마다 이동 전, 이동 후 비교하여 문자열을 추가. 0,0에서 0,1로 갔다면 5556
// 4, 3 => 5, 3 = 4353 / 5, 3 => 4, 3 = 5343 같은 경우를 고려해야함
// x, y가 감소되는 행동(L, D) 일 때 문자열을 반대로 적용
// 마지막에 중복 제거해서 남는 길이가 정답

function solution(dirs) {
  let x = 5;
  let y = 5;
  const moveHistory = [];

  dirs.split("").map((move) => {
    if (move === "U" && y < 10) {
      moveHistory.push("" + x + y + x + (y + 1));
      y++;
    } else if (move === "R" && x < 10) {
      moveHistory.push("" + x + y + (x + 1) + y);
      x++;
    } else if (move === "D" && y > 0) {
      moveHistory.push("" + x + (y - 1) + x + y);
      y--;
    } else if (move === "L" && x > 0) {
      moveHistory.push("" + (x - 1) + y + x + y);
      x--;
    }
  });
  return moveHistory.filter((item, i) => moveHistory.indexOf(item) === i)
    .length;
}

console.log(solution("ULURRDLLU"));
