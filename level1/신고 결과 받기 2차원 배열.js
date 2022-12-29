function solution(id_list, report, k) {
  // id_list: 유저 아이디 목록
  // report: 신고 목록
  // k: 정지 기준
  // 정지시켰을 때 신고한 사람에게 메일 전송
  // 각 유저 별로 신고 결과 보고 메일 개수 배열로 리턴

  const users = id_list.length;
  const arr = Array(users);
  for (let i = 0; i < users; i++) {
    arr[i] = new Array(users).fill(0);
  }

  report = report.map((i) => i.split(" "));

  report = report.filter((item1, index1) => {
    return report.findIndex((item2, index2) => {
      return (
        item1[0] === item2[0] && item1[1] === item2[1] && index1 !== index2
      );
    });
  });

  // console.log("report ", report);

  // 여기까지 중복 신고 제거
  report.map((item) => {
    let x = id_list.findIndex((id) => id === item[1]); // 신고 당한 유저
    let y = id_list.findIndex((id) => id === item[0]); // 신고한 유저
    arr[y][x] = 1;
  });

  const isBanned = id_list.map((id, index) => {
    let count = 0;
    for (let j = 0; j < users; j++) {
      if (arr[j][index] === 1) count++;
    }
    return [id, count >= k];
  });
  // console.log(isBanned);

  return id_list.map((id, index) => {
    let count = 0;
    for (let x = 0; x < users; x++) {
      if (arr[index][x] === 1 && isBanned[x][1]) count++;
    }
    return count;
  });

  // for (let j = 0; j < users; j++) {
  //   let str = id_list[j] + "의 신고 : ";

  //   for (let i = 0; i < users; i++) {
  //     str += arr[j][i];
  //   }
  //   console.log(str);
  // }
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
