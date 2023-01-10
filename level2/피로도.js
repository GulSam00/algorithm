// 0분 시작
// 24분 시작

function solution(k, dungeons) {
  let answer = 0;

  function recursive(cur, left, index) {
    console.log(cur, left, " | ", index);
    if (index === dungeons.length) {
      answer = index;
      return;
    }
    for (let i = 0; i < left.length; i++) {
      if (cur < left[i][0]) {
        answer = Math.max(answer, index);
      } else {
        const leftDungeons = left.filter((item, itemIndex) => i !== itemIndex);
        console.log("index : ", index, "Left : ", leftDungeons);
        recursive(cur - left[i][1], leftDungeons, index + 1);
      }
    }
  }
  recursive(k, dungeons, 0);
  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
