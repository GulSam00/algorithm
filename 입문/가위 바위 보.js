function solution(rsp) {
  console.log([...rsp]);
  var answer = rsp
    .split("")
    .map((i) => (i === "0" ? "5" : i === "2" ? "0" : "2"))
    .join("");

  return answer;
}

solution("012");
