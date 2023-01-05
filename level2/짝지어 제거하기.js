// 12분 시작
// 50분 종료

// function solution(s) {

// // while 문 구현 - 시간 초과
//   let index = 0;
//   s = s.split("");
//   while (s.length && index < s.length) {
//     console.log(index, s);

//     if (s[index] === s[index + 1]) {
//       console.log("slice");
//       s.splice(index, 2);
//       index = index ? index - 1 : index;
//     } else index++;
//   }
//   return s.length ? 0 : 1;

//   // 스택 구현
const stack = [];
s.split("").map((num) => {
  stack.push(num);
  if (stack.length > 1 && stack[stack.length - 1] === stack[stack.length - 2]) {
    // stack은 하나씩 집어넣기 때문에 abba 같이 b가 사라져서 a도 사라져야 할 상황에서도 a, ab, a 순서로 남아있기에 굳이 while으로 반복 처리할 필요가 없다
    stack.pop();
    stack.pop();
  }
});

//   return stack.length ? 0 : 1;
// }

function solution(s) {
  const result = [];
  for (let chr of s) {
    console.log(result);
    if (result.length === 0) result.push(chr);
    else if (result[result.length - 1] == chr) result.pop();
    else result.push(chr);
  }
  return result.length == 0 ? 1 : 0;
}

console.log(solution("abaabaaa"));
