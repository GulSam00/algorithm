function solution(array, n) {
  const sort = array.sort((a, b) => a - b); // 근사치가 중복될 경우 작은 값을 리턴해야 하기 때문에 인덱스 정렬
  const answer = array.map((i) => (i < n ? n - i : i - n));
  const min = Math.min(...answer);
  console.log(answer.findIndex((i) => i === min));

  console.log(sort);
  console.log(answer);
  return sort[answer.findIndex((i) => i === min)];
}

solution([10, 11, 12, 18], 12);
