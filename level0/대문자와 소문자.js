function solution(my_string) {
  const answer = my_string.split("").map((v) => {
    if (v.charCodeAt() < 97)
      // 97은 소문자 a의 유니코드. 작다는 것은 대문자를 의미
      return v.toLowerCase();
    else return v.toUpperCase();
  });
  return answer.join("");
}
