const solution = (phone_book) => {
  let answer = true;
  const hash = {};
  let i = 0;

  // 맨 처음 모든 요소를 해시로 등록
  phone_book.map((i) => (hash[i] = 1));

  while (phone_book[i]) {
    let str = "";
    // 각 전화번호를 처음부터 한글자 씩 붙여서 접두사 검사. 이 때 자기자신은 접두사에서 제외해야 하므로 검사 동안 값을 변경.
    hash[phone_book[i]] = 0;

    console.log("hash : ", hash);

    phone_book[i].split("").map((char) => {
      str += char;
      if (hash[str]) {
        answer = false;
      }
    });
    if (!answer) return answer;
    hash[phone_book[i]] = 1;
    i++;
  }
  return answer;
};

console.log(solution(["12", "123", "1235", "567", "88"]));
