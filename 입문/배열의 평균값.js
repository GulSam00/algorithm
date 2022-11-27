function solution(numbers) {
  // const sum = numbers.reduce((prev, curr, curI, arr) => prev + curr, 0);
  let sum = 0;
  numbers.map((number) => (sum += number));
  return sum / numbers.length;
}

console.log(solution([1, 32, 13, 412]));
