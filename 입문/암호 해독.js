function solution(cipher, code) {
  return cipher
    .split("")
    .filter((v, i) => (i + 1) % code === 0)
    .join("");
}

console.log(solution("dfjardstddetckdaccccdegk", 4));
