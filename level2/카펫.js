// 50분 시작
// 2분 끝

// 12분 소요

function solution(brown, yellow) {
  const sum = brown + yellow;
  for (let h = 3; h < sum; h++) {
    // 가로 길이가 더 길어야 하기 때문에 for문으로 돌아가는 건 높이가 되야 함
    if (sum % h !== 0) continue;
    let w = sum / h;
    if (yellow === (w - 2) * (h - 2)) return [w, h];
  }
}
