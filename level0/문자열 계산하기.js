function solution(my_string) {
  return eval(my_string);

  const arr = my_string.split(" ");
  let answer = +arr[0];
  for (let i = 1; i < arr.length; i += 2) {
    if (arr[i] === "+") answer += +arr[i + 1];
    else answer -= +arr[i + 1];
  }
  return answer;
}

console.log(solution("3+4  -2 + 7 ")); // eval 함수를 사용하면 공백까지도 고려해서 수식을 고려한다.
