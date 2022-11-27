function solution(angle) {
  console.log([0, 90, 91, 180].filter((x) => angle >= x).length);

  if (angle <= 90) {
    return angle === 90 ? 2 : 1;
  } else {
    return angle === 180 ? 4 : 3;
  }
}
