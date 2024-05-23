// Date: 2021/08/21

// 17:30 ~ 18:00

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const hash = {};
  const result = [];
  nums = nums.sort((a, b) => a - b);
  let j, k;

  console.log(nums);

  for (let i = 0; i < nums.length; i++) {
    j = i + 1;
    k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum < 0) {
        while (j < k && sum === nums[i] + nums[j] + nums[k]) j++;
      } else if (sum > 0) {
        while (j < k && sum === nums[i] + nums[j] + nums[k]) k--;
      } else {
        hash[[nums[i], nums[j], nums[k]]] = 1;
        while (j < k && sum === nums[i] + nums[j] + nums[k]) j++;
      }
    }
  }
  for (item in hash) {
    result.push(item.split(",").map((i) => Number(i)));
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
