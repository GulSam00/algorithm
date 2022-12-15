// 문자열 앞에 ... 를 붙이면 문자를 하나씩 분리해서 배열로 만들어준다.
console.log([..."123"]);

// 정렬 알고리즘
// 오름차순
score.sort(function (a, b) {
  return a - b;
});

// 내림차순
score.sort(function (a, b) {
  return b - a;
});

// 팩토리얼 구하는 함수
const getFactorial = (n) => {
  if (n === 1) return 1;
  return n * getF(n - 1);
};

// 정규식 문법
// https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%A0%95%EA%B7%9C%EC%8B%9D-RegExp-%EB%88%84%EA%B5%AC%EB%82%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC

// replace() 메서드는 정규식을 사용할 수 있다.
// [a-z] : a부터 z까지의 문자
// g : 전역 검색
// i : 대소문자 구분 안함
function reg1(my_string) {
  return my_string.replace(/[aeiou]/gi, "");
}

// [^abc] : a, b, c를 제외한 문자
function reg2(my_string) {
  return my_string.replace(/[^0-9]/gi, "");
}

// new RegExp() 생성자를 사용하여 변수에 담긴 값으로 정규식을 만들 수 있다.
function reg3(my_string) {
  const reg = new RegExp("[^0-9]", "gi");
  return my_string.replace(reg, "");
}

// 배열 더하는 함수
// reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
// https://www.zerocho.com/category/JavaScript/post/5acafb05f24445001b8d796d
function reduce() {
  result = oneTwoThree.reduce((acc, cur, i) => {
    console.log(acc, cur, i);
    return acc + cur;
  }, 0);
  return result;
}

// 배열 중복 제거
function removeDuplication(arr) {
  return new Set(arr);
}

// readline 예제
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ");
}).on("close", () => {
  console.log(Number(input[0])); // EOF가 발생하여 더이상의 입력이 없을 때 실행된다.
});

// for...of
// for...of 문으로 배열, 객체를 하나하나 돌아보는 것은 물론 문자열로 각 문자 단위로 접근할 수 있다.
const str = "hello world";
for (const char of str) {
  console.log(char);
}

// 자르는 함수(substr, slice, substring...)는 원본 문자열을 변경하지 않는다.
let origin = "helloworld";

let temp = str.replace("hello", "");
console.log(temp, origin);
