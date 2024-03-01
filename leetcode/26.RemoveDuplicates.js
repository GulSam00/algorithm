/**
 * @param {number[]} nums
 * @return {number}
 */

// 중복없이 배치하는 포인터(0부터 시작), nums를 끝까지 읽는 포인터(1부터 시작)로 구현 가능

var removeDuplicates = function (nums) {
  let k = 1;
  let arr = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== arr[k - 1]) {
      arr.push(nums[i]);
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};
