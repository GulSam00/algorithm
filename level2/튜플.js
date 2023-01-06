// 35분 시작
// 26분 종료

// 정해진 순서를 지닌 행렬인 튜플
// 집합 내에서는 순서가 바뀌어도 무방

function solution(s) {
  const parseStr = s.replace(/[^0-9|},]|}}/g, "").split("},");
  const parseArrs = parseStr
    .map((i) => i.split(","))
    .sort((a, b) => a.length - b.length);

  //   console.log("str : ", parseStr);
  //   console.log("arr ", parseArrs);
  return parseArrs.map((arr, i) => {
    if (i === 0) return +arr[0];
    // console.log("I ", i, "arr : ", parseArrs[i]);
    return (
      arr.reduce((acc, cur) => acc + Number(cur), 0) -
      parseArrs[i - 1].reduce((acc, cur) => acc + Number(cur), 0)
    );
  });
}

console.log(solution("{{20,111},{111}, {20, 111, 4}}"));
