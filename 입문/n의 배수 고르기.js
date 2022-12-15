function solution(n, numlist) {
  return numlist.filter((num) => num % n === 0);
}

console.log(solution([1, 2, 3, 5], [3, 4, 5]));
