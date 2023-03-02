// 3:20 시작
// 4:18 끝
// 코드를 그대로 쳤는데도 난해

function solution(p) {
  //   function turnStr(str, isCorrect) {
  //     if (isCorrect) return str;

  //     let leftCnt = 0;
  //     let rightCnt = 0;
  //     for (let i = 0; i < str.length; i++) {}
  //     return "(" + str + ")";
  //   }

  function turn(str) {
    if (!str.length) return "";
    str = str.split("");

    let leftCnt = 0;
    let rightCnt = 0;
    let isCorrect;

    while (str.length) {
      isCorrect = true;
      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === "(") leftCnt++;
        else rightCnt++;

        if (leftCnt < rightCnt) isCorrect = false;
        if (leftCnt === rightCnt) {
          let cur = str.splice(0, i + 1).join("");
          console.log("splice ", cur);
          if (isCorrect) {
            // if (str.length > 0) return (cur += turn(str.join("")));
            // return cur;
            return (cur += str.length > 0 ? turn(str.join("")) : "");
          } else {
            const newCur = cur
              .slice(1, cur.length - 1)
              .split("")
              .map((i) => {
                if (i === "(") return ")";
                else return "(";
              })
              .join("");

            return "(" + turn(str.join("")) + ")" + newCur;
          }
        }
      }
    }
  }

  return turn(p);
}

solution("()))((()");
