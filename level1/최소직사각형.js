function solution(sizes) {
  let vMax = 0;
  let wMax = 0;

  sizes.map(([a, b]) => {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    vMax = vMax > max ? vMax : max;
    wMax = wMax > min ? wMax : min;
  });

  return vMax * wMax;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
