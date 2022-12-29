function solution(s) {
  const arr = s.split(" ");
  const answer = [];
  //   let answer = 0;
  //   arr.map((v, i) => (v !== "Z" ? (answer += +v) : (answer -= +arr[i - 1])));
  //   arr.map((v, i) =>
  //     v !== "Z" ? (answer += +v) : i !== 0 && (answer -= +arr[i - 1])
  //   );
  arr.map((v) => (v !== "Z" ? answer.push(+v) : answer.pop()));
  return answer.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution("1 2 Z 3"));
