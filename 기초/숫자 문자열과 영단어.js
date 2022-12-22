function solution(s) {
  const numStrs = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  numStrs.map((v, i) => {
    s = s.replaceAll(v, i);
  });
  return Number(s);
}

// function solution(s) {
//   let numbers = [
//     "zero",
//     "one",
//     "two",
//     "three",
//     "four",
//     "five",
//     "six",
//     "seven",
//     "eight",
//     "nine",
//   ];
//   var answer = s;

//   for (let i = 0; i < numbers.length; i++) {
//     let arr = answer.split(numbers[i]); // 문자열 숫자를 기준으로, 문자열 숫자가 제외된 배열이 만들어진다.
//     console.log(arr);
//     answer = arr.join(i); // 배열을 문자열로 합칠 때 구분자로 i, 제거했던 문자열 숫자를 정수 숫자로 넣어준다.
//   }

//   return Number(answer);
// }

console.log(solution("one4seveneight"));
