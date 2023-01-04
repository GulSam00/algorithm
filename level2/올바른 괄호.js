// 22분 시작

function solution(s) {
  const arr = [];

  s.split("").map((i) => {
    if (i === "(") arr.push(i);
    else if (!arr.pop()) {
      arr.push("wrong");
      return;
    }
  });

  return arr.length ? false : true;
}
