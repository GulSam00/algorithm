// 13:00 시작
// 13:34 끝
// 1시간 소요

const getTired = (pick, mineral) => {
  const mineralList = ["diamond", "iron", "stone"];

  const weight = mineralList.indexOf(mineral);
  // pick = 0, 1, 2
  // weight = 0, 1, 2
  let tired = pick - weight;
  if (tired < 0) tired = 0;
  return 5 ** tired;
};

const recursion = (picks, minerals, sum, smallSum) => {
  console.log(picks, minerals, sum);

  if (!minerals.length || !picks.reduce((cur, prev) => cur + prev)) return sum;

  let i = -1;
  while (i < 3) {
    i++;
    if (!picks[i]) continue;

    const newPicks = [...picks];
    const newMinerals = [...minerals];
    const works = newMinerals.splice(0, 5);
    console.log("works : ", works);

    let worksTired = works
      .map((item) => getTired(i, item))
      .reduce((prev, cur) => prev + cur);
    newPicks[i]--;
    const totalSum = recursion(
      newPicks,
      newMinerals,
      sum + worksTired,
      smallSum
    );
    console.log("totalSum : ", totalSum);
    console.log("smallSum : ", smallSum);
    if (smallSum === 0 || totalSum < smallSum) smallSum = totalSum;
  }
  return smallSum;
};

const solution = (picks, minerals) => {
  const answer = recursion(picks, minerals, 0, 0);
  console.log(answer);
  return answer;
};

solution(
  [0, 1, 1],
  [
    "diamond",
    "diamond",
    "diamond",
    "diamond",
    "diamond",
    "iron",
    "iron",
    "iron",
    "iron",
    "iron",
    "diamond",
  ]
);
