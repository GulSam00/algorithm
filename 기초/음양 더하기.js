function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, index) => {
    return (acc += cur * (signs[index] ? 1 : -1)), 0;
  });
}

console.log(solution([1, 2, 3], [false, false, true]));
