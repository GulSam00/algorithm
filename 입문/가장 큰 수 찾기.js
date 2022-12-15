function solution(array) {
  const sorted = [...array];
  sorted.sort((a, b) => b - a);
  console.log(sorted, array);
  const index = array.indexOf(sorted[0]);
  return [sorted[0], index];
}

console.log(solution([1, 2, 10, 4, 5]));
