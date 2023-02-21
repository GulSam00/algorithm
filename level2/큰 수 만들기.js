// 31분 시작
// 19분 포기

// function solution(number, k) {
//   // 앞에서부터 k만큼 전진하며 가장 큰 수만 남기고 제거?
//   let max = 0;
//   let i;
//   const answer = [];

//   for (i = 0; i < k; i++) {
//     if (max < Number(number[i])) max = Number(number[i]);
//   }
//   i = number.indexOf(max + "");
//   console.log("I : ", i);
//   number = number.slice(i);

//   k -= i;

//   //   number = number.split("");
//   // 앞에서 할 수 있을만큼 커팅

//   // 모든 문자열을 검사?

//   for (let j = 0; j < number.length; j++) {
//     console.log(j);
//     console.log(number[j], number[j + 1]);
//     if (number[j] >= number[j + 1]) answer.push(number[j]);
//     else if (!k || j === number.length - 1) answer.push(number[j]);
//     else if (k) k--;
//   }

//   //   for (let num = 9; num > 0; num++) {}
//   return answer.join("");
// }

function solution(number, k) {
  // stack은 앞에서부터 가장 큰 수를 만들 수 있는 수들을 집어넣는 스택 배열
  const stack = [];
  let answer = "";
  for (let i = 0; i < number.length; i++) {
    const el = number[i];
    // 현재 비교하려는 수가 스택(큰 수)의 마지막 자리 수보다 크다면 교체하기 위해 스택에서 pop한다.
    while (k > 0 && stack[stack.length - 1] < el) {
      stack.pop();
      k--;
    }
    // 항상 스택에 수를 push한다.
    stack.push(el);
  }
  // k가 남았다라는 것은 앞에서 제거할 만큼 제거했다는 의미이기에 뒤에서부터 남은 k를 잘라준다.
  // 잘라지는 값은 항상 작은 값, 큰 값이었다면 for을 돌면서 stack 안에 들어갔을 것이므로...
  stack.splice(stack.length - k, k);
  answer = stack.join("");
  return answer;
}

console.log(solution("98521", 4));
