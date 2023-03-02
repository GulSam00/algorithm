// 3:21 시작

function solution(expression) {
  const regex = /[+\-*]/g;
  let answer = 0;

  const nums = expression.split(regex);
  const symbols = expression.match(regex);
  const maxSymbols = symbols.filter((item, i) => symbols.indexOf(item) === i);

  const equation = [];

  for (let i = 0; i < nums.length; i++) {
    equation.push(nums[i]);
    equation.push(symbols[i]);
  }
  equation.pop();

  // 재귀를 돌며 maxSymbols를 빼가며 계산
  // 종료할 때 값을 비교하여 최댓값을 비교 후 저장

  // +, [-, *]
  function recursion(symbol, leftSymbols, equ) {
    const newEqu = [];
    for (let i = 0; i < equ.length; i++) {
      const cur = equ[i];

      if (symbol === cur) {
        let temp = Number(newEqu.pop());
        const next = Number(equ[i + 1]);
        if (cur === "+") temp += next;
        else if (cur === "-") temp -= next;
        else temp *= next;

        newEqu.push(temp);
        i++;
      } else newEqu.push(cur);
    }
    // console.log("symbol ", symbol);
    // console.log("new ", newEqu);
    // console.log("left ", leftSymbols);

    if (!leftSymbols.length) {
      //   console.log(Math.abs(newEqu[0]), answer);
      if (Math.abs(newEqu[0]) > answer) answer = Math.abs(newEqu[0]);
      //   console.log("answer : ", answer);
      return;
    }

    for (let i = 0; i < leftSymbols.length; i++) {
      const cur = leftSymbols[i];

      recursion(
        cur,
        leftSymbols.filter((i) => i !== cur),
        newEqu
      );
    }
  }

  recursion("", maxSymbols, equation);

  return answer;
}

console.log(solution("100-200*300-500+20"));
