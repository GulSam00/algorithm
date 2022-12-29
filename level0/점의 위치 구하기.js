function solution(dot) {
  if (0 < dot[0]) return dot[1] > 0 ? 1 : 4;
  else return dot[1] > 0 ? 2 : 3;
}
