// 41분
// 11분

// 30분 소모

function solution(msg) {
  const dic = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));

  const answer = [];

  let index = 0;
  let anchor;
  let page;
  let dicIndex;
  let validIndex;

  while (index < msg.length) {
    console.log("dic : ", dic);
    console.log("char : ", msg[index]);
    let page = msg[index];
    anchor = index;
    dicIndex = dic.indexOf(page);

    while (dicIndex !== -1 && anchor < msg.length) {
      page += msg[++anchor];
      validIndex = dicIndex;
      dicIndex = dic.indexOf(page);
      index++;
    }
    console.log("page :", page);
    console.log(validIndex, dicIndex);

    dic.push(page);
    answer.push(validIndex + 1);
  }
  return answer;
}

console.log(solution("TOBEORNOTTOBEORTOBEORNOT"));
