// 10:04 시작
// 10:28 끝

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let [pt1, pt2] = [0, numbers.length - 1];
  while (numbers[pt1] + numbers[pt2] !== target) {
    if (numbers[pt1] + numbers[pt2] > target) pt2--;
    else pt1++;
  }
  return [pt1 + 1, pt2 + 1];
};

console.log(twoSum([2, 7, 11, 15], 9));
