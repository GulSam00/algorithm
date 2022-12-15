function solution(my_string) {
  return my_string
    .split("")
    .map((v) => v.toLowerCase())
    .sort((a, b) => a.charCodeAt() - b.charCodeAt())
    .join("");
}

console.log(solution("Bcad"));
