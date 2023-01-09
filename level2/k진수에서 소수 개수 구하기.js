// 5분 시작
// 30분 종료

// const max = 10000000;
// const primeNumbers = new Array(max).fill(true);

// primeNumbers[0] = false;
// primeNumbers[1] = false;

// for (let i = 2; i <= max; i++) {
//   if (!primeNumbers[i]) continue;
//   for (let j = i + i; j <= max; j += i) primeNumbers[j] = false;
// }

function checkPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  const arr = n
    .toString(k)
    .split("0")
    .map((n) => +n);

  return arr.filter((num) => checkPrime(num)).length;
}

console.log(solution(437674, 3));

console.log(solution(885733, 3));
