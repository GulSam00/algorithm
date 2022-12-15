function solution(id_list, report, k) {
  // id_list: 유저 아이디 목록
  // report: 신고 목록
  // k: 정지 기준
  // 정지시켰을 때 신고한 사람에게 메일 전송
  // 각 유저 별로 신고 결과 보고 메일 개수 배열로 리턴

  const users = id_list.length;
  const answer = Array(users).fill(0); // 메일 오는 개수
  const reported_arr = Array(users).fill(0); // 신고 당한 배열
  const out = []; // 정지된 유저

  // report = report.filter((item1, index1) => {
  //   return report.findIndex((item2, index2) => {
  //     return (
  //       item1[0] === item2[0] && item1[1] === item2[1] && index1 !== index2
  //     );
  //   });
  // });
  report = [...new Set(report)];
  report = report.map((i) => i.split(" "));

  report.map((item) => {
    const reported_index = id_list.indexOf(item[1]);
    reported_arr[reported_index]++; // 신고 당한 유저
    if (reported_arr[reported_index] >= k) out.push(id_list[reported_index]); // 정지된 유저
  });

  report.map((item, index) => {
    const reporter_index = id_list.indexOf(item[0]);
    const reported_index = id_list.indexOf(item[1]);

    if (out.includes(item[1])) answer[reporter_index]++;
  });

  return answer;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    [
      "muzi frodo",
      "muzi frodo",
      "muzi frodo",
      "apeach frodo",
      "frodo neo",
      "muzi neo",
      "apeach muzi",
    ],
    2
  )
);
