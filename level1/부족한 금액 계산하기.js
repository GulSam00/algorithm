function solution(price, money, count) {
  let pay = 0;
  for (let i = 1; i <= count; i++) {
    pay += price * i;
  }

  return pay < money ? 0 : pay - money;
}

// 가우스 공식을 이용한 풀이
// 1부터 n까지의 합은 n(n + 1) / 2
// function solution(price, money, count) {
//     const tmp = price * count * (count + 1) / 2 - money;
//     return tmp > 0 ? tmp : 0;
// }
