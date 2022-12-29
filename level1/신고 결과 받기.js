function solution(id_list, report, k) {
  // id_list: 유저 아이디 목록
  // report: 신고 목록
  // k: 정지 기준
  // 정지시켰을 때 신고한 사람에게 메일 전송
  // 각 유저 별로 신고 결과 보고 메일 개수 배열로 리턴

  const answer = Array(id_list.length).fill(0);

  report = report.map((i) => i.split(" "));

  report = report.filter((item1, index1) => {
    return report.findIndex((item2, index2) => {
      return (
        item1[0] === item2[0] && item1[1] === item2[1] && index1 !== index2
      );
    });
  });

  // 여기까지 중복 신고 제거

  let reported = id_list.map((reported_id) => {
    return report.filter((item) => {
      return item[1] === reported_id;
    });
  });

  for (let id_index = 0; id_index < id_list.length; id_index++) {
    report.map((r) => {
      if (
        r[0] === id_list[id_index] &&
        reported[id_list.findIndex((id) => id === r[1])].length >= k
      )
        answer[id_index]++;
    });
  }

  return answer;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
