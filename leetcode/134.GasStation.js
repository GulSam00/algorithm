// 치팅

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

// 대량의 배열 시 타임 오버
var canCompleteCircuit1 = function (gas, cost) {
  let curGas;
  let length = gas.length;
  for (let i = 0; i < length; i++) {
    curGas = gas[i];
    for (let j = 0; j < length; j++) {
      let curI = j + i;
      curGas -= cost[curI % length];
      if (curGas < 0) break;
      curGas += gas[(curI + 1) % length];
    }
    if (curGas > 0) return i;
  }
  return -1;
};

const canCompleteCircuit = (gas, cost) => {
  let n = gas.length;
  let total_surplus = 0;
  let surplus = 0;
  let start = 0;

  for (let i = 0; i < n; i++) {
    console.log(total_surplus, surplus, start);

    total_surplus += gas[i] - cost[i];
    surplus += gas[i] - cost[i];
    if (surplus < 0) {
      surplus = 0;
      start = i + 1;
    }
  }
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
