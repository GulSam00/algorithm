function solution(my_string, letter) {
  // const answer = my_string.split(letter).join('')

  var answer = my_string.replaceAll(letter, "");
  return answer;
}
console.log(solution("hello", "l"));
