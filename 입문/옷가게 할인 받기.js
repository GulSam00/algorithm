function solution(price) {
  let payback = 0;
  if (price >= 500000) payback = 20;
  else if (price >= 300000) payback = 10;
  else if (price >= 100000) payback = 5;
  return Math.floor(price - (price / 100) * payback);
}

console.log(solution(500000));
