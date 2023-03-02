// 4:00 시작

// 한 큐에 몰아넣고, 앞에서부터 하나씩 빼기?

// 투 포인터 필요
function solution(queue1, queue2) {
  const total = [...queue1, ...queue2];

  const maxCount = total.length * 2;
  const half = total.reduce((acc, cur) => acc + cur) / 2;
  let queueSum1 = queue1.reduce((acc, cur) => acc + cur);
  let queueSum2 = queue2.reduce((acc, cur) => acc + cur);
  let start = 0;
  let end = queue1.length;

  for (let i = 0; i < maxCount; i++) {
    if (queueSum1 === half) return i;
    else if (queueSum1 < half) queueSum1 += total[end++];
    else if (queueSum1 > half) queueSum1 -= total[start++];
  }
  return -1;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
