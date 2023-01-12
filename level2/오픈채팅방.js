// 40분 시작
// 16분 종료

// 런타임 에러 + 시간 초과
// function solution(record) {
//   let set = new Set();
//   const parsed = record.map((item) => {
//     const splited = item.split(" ");
//     set.add(splited[1]);
//     return splited;
//   });

//   set = [...set].map((user) => {
//     const filtered = parsed.filter((data) => data[1] === user);
//     for (let i = filtered.length - 1; 0 < i; i--)
//       if (filtered[i][0] !== "Leave")
//         // 마지막에서부터 탐색하며 Leave를 제외한 Enter, Change의 마지막 변경사항 검색
//         // 원본을 변경? 아니면 변경 사항이 담긴 객체를 생성?
//         return { id: user, nickname: filtered[i][2] };
//     return { user: filtered[0][2] };
//   });

//   const answer = parsed.map((data) => {
//     const nickname = set.filter((item) => item.id === data[1])[0].nickname;
//     if (data[0] === "Enter") return nickname + "님이 들어왔습니다.";
//     else if (data[0] === "Leave") return nickname + "님이 나갔습니다.";
//   });
//   return answer.filter((i) => i);
// }

function solution(record) {
  // 해시 응용
  const userList = {};

  const parsed = record.filter((item) => {
    const splited = item.split(" ");
    if (splited[0] !== "Leave") {
      userList[splited[1]] = splited[2];
      if (splited[0] === "Change") return;
    }
    return splited;
  });

  console.log(userList);
  console.log(parsed);
  return parsed.map((item) => {
    const data = item.split(" ");
    const message =
      data[0] === "Enter" ? "님이 들어왔습니다." : "님이 나갔습니다.";
    return userList[data[1]] + message;
  });
}
console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
