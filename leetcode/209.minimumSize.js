/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

// 18:20 ~

var minSubArrayLen = function (target, nums) {
  let left = 0;
  let right = 0;
  let answer = 0;
  let sum = nums[left];

  while (right < nums.length) {
    console.log("suM : ", sum);
    if (sum < target) sum += nums[++right];
    else {
      console.log("l, r : ", left, right);
      if (answer === 0) answer = right - left + 1;
      else if (answer > right - left) answer = right - left + 1;

      sum -= nums[left++];
    }
  }
  console.log("ANSWER : ", answer);
  return answer;
};

console.log(minSubArrayLen(6, [10, 2, 3]));
