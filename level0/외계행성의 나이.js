function solution(age) {
  const arr = ("" + age).split("");
  const answer = [];
  for (num of arr) {
    answer.push(String.fromCharCode(97 + parseInt(num)));
  }

  return answer.join("");
  //   return age
  //   .toString()
  //   .split("")
  //   .map((v) => "abcdefghij"[v])
  //   .join("");
}

solution(23);
