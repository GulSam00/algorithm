/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const arr = {};
  let max = 0;
  let maxNum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (arr[nums[i]]) arr[nums[i]]++;
    else arr[nums[i]] = 1;
  }
  for (key in arr) {
    if (arr[key] > max) {
      max = arr[key];
      maxNum = key;
    }
  }

  return maxNum;
};

console.log(majorityElement([3, 3, 4]));
