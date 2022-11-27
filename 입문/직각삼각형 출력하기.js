const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ");
}).on("close", () => {
  solution(input[0]);
});

const solution = (arg) => {
  for (let i = 1; i <= arg; i++) {
    let str = "";
    for (let j = 0; j < i; j++) {
      if (i >= j) str += "*";
    }
    console.log(str);
  }
};
