function solution(my_str, n) {
  const answer = [];
  for (let i = 0; i < my_str.length; i += n) {
    answer.push(my_str.slice(i, i + n));
  }
  return answer;
}

console.log(solution("나는 자바를 잘하고 싶다", 3));
