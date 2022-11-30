function solution(my_string) {
  const answer = my_string.replace(/[^0-9]/gi, "");

  return answer
    .split("")
    .sort((a, b) => a - b)
    .map(Number);
}

console.log(solution("hi12392"));
