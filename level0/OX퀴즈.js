// function solution(quiz) {
//   const arr = quiz.map((str) => {
//     const temp = str.split(" ");
//     return [eval(temp.slice(0, -2).join("")), +temp[4]];
//   });
//   return arr.map((v) => (v[0] === v[1] ? "O" : "X"));
// }

function solution(quiz) {
  const arr = quiz.map((str) => str.split(" "));
  return arr.map((v) => {
    if (v[1] === "+") return +v[0] + +v[2] === +v[4] ? "O" : "X";
    else return +v[0] - +v[2] === +v[4] ? "O" : "X";
  });
}

console.log(solution(["3 - 4 = -3", "5 + 6 = 11"]));
