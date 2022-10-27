// 1

function solution(n) {
  const left = n % 7 ? 1 : 0;
  const pizza = n / 7;
  return Math.floor(pizza) + left;
}
