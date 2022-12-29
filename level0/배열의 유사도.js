function solution(s1, s2) {
  return s1.filter((v) => s2.includes(v)).length;
}

solution([1, 2, 3, 5], [3, 4, 5]);
