function solution(n) {
  return (n + "")
    .split("")
    .map((num) => +num)
    .reduce((acc, cur, i) => {
      return acc + cur;
    }, 0);
}
