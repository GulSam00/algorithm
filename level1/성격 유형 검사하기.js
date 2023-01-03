// 2분 시작
// 29분 종료

function solution(survey, choices) {
  // RT CF JM AN
  const charLists = ["RT", "CF", "JM", "AN"];

  const answer = Array(4).fill(0);
  choices = choices.map((num) => num - 4); // 절대값. 부호에 따라 구분.

  survey.map((str, i) => {
    // console.log("before", str, choices[i]);

    if (str[0] > str[1]) {
      // 미리 사전 순으로 변환. 이 때 choices의 값도 음수화
      choices[i] *= -1;
      str = str[1] + str[0];
    }
    // console.log("after", str, choices[i]);

    const charIndex = charLists.indexOf(str);
    answer[charIndex] += choices[i];
  });

  return answer
    .map((v, i) => {
      if (v <= 0) return charLists[i][0];
      else return charLists[i][1];
    })
    .join("");
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
