function solution(my_string) {
  let answer = 0;
  const str = my_string.replace(/[^0-9]/gi, "");

  str.split("").forEach((v) => (answer += Number(v)));

  return answer;
}
