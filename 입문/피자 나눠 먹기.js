// 1

function solution(n) {
  const left = n % 7 ? 1 : 0;
  const pizza = n / 7;
  return Math.floor(pizza) + left;
}

// 2
function solution(n) {
  let pizza = 1;
  while ((pizza * 6) % n) {
    pizza += 1;
  }
  return pizza;
}

// 3
function solution(slice, n) {
  let pizza = 1;
  while ((pizza * slice) / n < 1) {
    pizza += 1;
  }
  return pizza;
}

function test(slice, n) {
  console.log("n / slice : ", n / slice);
  return Math.ceil(n / slice);
}

console.log(test(5, 12));
