// 11:15 시작
// 12:09 스톱
function solution(files) {
  // 데이터 손실 없이 파싱
  const parsed = files.map((str) => {
    const arr = str.split("");
    let numberIndex = 0;
    let numcount = 5;

    const headIndex = str.search(/[0-9]/);
    const head = arr.splice(0, headIndex);

    while (numcount && /[0-9]/.test(arr[numberIndex])) {
      numberIndex++;
      numcount--;
    }
    const number = arr.splice(0, numberIndex);
    return [head.join(""), number.join(""), arr.join("")];
  });

  // cur이 dst보다 크다면, dst가 cur보다 앞에 와야 하면 true 리턴
  function isSmall(cur, dst) {
    // console.log(" & ", cur, dst);

    // HEAD 검사
    // console.log(cur[0].toUpperCase(), dst[0].toUpperCase());
    // console.log(cur[0].toUpperCase() > dst[0].toUpperCase());
    if (cur[0].toUpperCase() > dst[0].toUpperCase()) return true;

    // // NUMBER 검사
    // console.log(Number(cur[1]), Number(dst[1]));
    // console.log(Number(cur[1]) > Number(dst[1]));
    if (Number(cur[1]) > Number(dst[1])) return true;

    return false;
  }
  //   console.log("before : ", parsed);

  // 자리에 맞게 찾아가게 삽입 정렬
  let temp, j;
  for (i = 0; i < parsed.length - 1; i++) {
    j = i;
    while (j >= 0 && isSmall(parsed[j], parsed[j + 1])) {
      temp = parsed[j];
      parsed[j] = parsed[j + 1];
      parsed[j + 1] = temp;
      j--;
    }
  }
  //   console.log("srot : ", parsed);

  return parsed.map((arr) => arr.join(""));
}

console.log(solution(["img12.png", "img0012.png", "im  g012.png", "img010"]));

// solution([
//   "img12.png",
//   "imh10.png",
//   "img02.png",
//   "DDmg1.png",
//   "CCMG01.12432GIF",
//   "BBmg2.JPG",
//   "aa24.fa",
// ]);
