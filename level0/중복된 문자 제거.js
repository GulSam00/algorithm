function solution(my_string) {
  const answer = my_string.split("");
  const result = [...new Set(answer)];
  return result.join("");
}

solution("We are the world");
