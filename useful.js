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
