function solution(order) {
  return (order + "").split("").filter((v) => v !== "0" && +v % 3 === 0).length;
}

console.log(solution("294203"));
