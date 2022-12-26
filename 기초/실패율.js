function solution(N, stages) {
  const stateN = Array(N)
    .fill()
    .map((v, i) => i + 1);

  const answer = stateN.map((v) => {
    // 각 단계별 실패율을 계산해서 index와 함께 배열에 저장
    const change = stages.filter((v2) => v2 >= v).length; // 이전 단계에서 떨어진 사람은 제외
    const fail = stages.filter((v2) => v2 === v).length; // 현재 단계에서 떨어진 사람

    return {
      stages: v,
      failRate: fail / change,
    };
  });
  answer.sort((a, b) => b.failRate - a.failRate); // 실패율 내림차순 정렬
  return answer.map((v) => v.stages); // index만 추출해서 반환
}

console.log(solution(4, [4, 4, 4, 4, 4]));
