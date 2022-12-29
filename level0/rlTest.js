const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ");
}).on("close", () => {
  console.log(Number(input[0])); // EOF가 발생하여 더이상의 입력이 없을 때 실행된다.
});
