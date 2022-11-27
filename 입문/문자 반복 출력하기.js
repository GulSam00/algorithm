function solution(my_string, n) {
  const stringSplit = my_string.split("");
  var answer = "";
  //   var answer = [...my_string].map(v => v.repeat(n)).join("");

  console.log([...my_string]);
  stringSplit.map((char) => {
    for (let i = 0; i < n; i++) {
      answer += char;
    }
  });

  return answer;
}

console.log(solution("hello", 3));
