const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const length = input.length;

let answer = 1;
let max = input[length - 1];

for (let i = length - 2; i >= 0; i--) {
  if (input[i] > max) {
    max = input[i];
    answer++;
  }
}

console.log(answer);
