// 45분 시작
// 8분 종료

// 너무 어렵게 생각
// 토너먼트의 총 경기 수는 참가자 - 1
function solution(n, a, b) {
  let answer = 1;

  while (1) {
    if (Math.ceil(a / 2) === Math.ceil(b / 2)) return answer; // 4, 5나 2, 3 같은 케이스를 바로 대전한다 생각해버림

    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    console.log(answer, " 경기 결과 : ", "a 박스 ", a, "b 박스 ", b);

    answer++;
  }
}

console.log(solution(8, 4, 5));
