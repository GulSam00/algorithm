// 51분 시작
// 19분 종료

function solution(progresses, speeds) {
  let index = 0;
  let anchor = 0;
  const answer = [];

  // (100 - 현재 작업률) / 진행률
  // 남은 작업 일수로 변환
  progresses = progresses.map((task, i) => Math.ceil((100 - task) / speeds[i]));

  while (index < progresses.length) {
    // 다음 배포 작업. 이전까지의 작업들을 slice하고 anchor를 index로
    if (progresses[anchor] < progresses[index]) {
      //   console.log(anchor, index);
      //   console.log("push : ", progresses.slice(anchor, index));
      answer.push(progresses.slice(anchor, index));
      anchor = index;
    }
    // console.log("anchor ", anchor, ": ", progresses[index]);
    index++;
  }
  //   console.log("push : ", progresses.slice(anchor, index));
  answer.push(progresses.slice(anchor, index));
  console.log(answer);
  return answer.map((i) => i.length);
}

solution([93, 30, 55], [1, 30, 5]);
