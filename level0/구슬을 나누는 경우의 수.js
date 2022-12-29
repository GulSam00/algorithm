function solution(balls, share) {
  return factorial(balls) / (factorial(share) * factorial(balls - share));
}

const factorial = (n) => {
  let num = BigInt(1);
  for (let i = n; i >= 2; i--) {
    num *= BigInt(i);
  }
  return num;
};

console.log(solution(5, 2));
