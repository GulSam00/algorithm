function solution(array) {
  var answer = 0;
  array.map((v) =>
    (v + "").split("").map((v) => (v === "7" ? answer++ : null))
  );
  return answer;
}
