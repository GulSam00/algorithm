// 시작 29분
// 42분 컷1

// 시작 27분
// 46분 끝

// 31분 소요

function solution(dartResult) {
  const result = [0, 0, 0];
  const scoreRate = ["S", "D", "T"];
  let trys = -1;
  let idx = 0;
  const numReg = new RegExp("[0-9]", "gi"); // 숫자 정규식
  const spaceReg = new RegExp("[S|D|T]", "gi"); // 영역 정규식

  while (idx < dartResult.length) {
    if (dartResult[idx].match(numReg)) {
      trys++;
      // 10일 경우 예외 처리
      if (dartResult[idx] === "1" && dartResult[idx + 1] === "0") {
        result[trys] = 10;
        idx += 2;
        continue;
      }
      result[trys] = +dartResult[idx];
    } else if (dartResult[idx].match(spaceReg)) {
      result[trys] = Math.pow(
        result[trys],
        scoreRate.indexOf(dartResult[idx]) + 1
      );
    } else {
      if (dartResult[idx] === "#") {
        result[trys] *= -1;
      } else if (dartResult[idx] === "*") {
        result[trys] *= 2;
        result[trys - 1] *= 2;
      }
    }
    idx++;
  }
  return result.reduce((acc, cur) => acc + cur);
}

console.log(solution("10S10D*10T"));
