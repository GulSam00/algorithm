/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  let pt1 = 0;
  let pt2 = 1;
  let temp = 0;

  while (pt2 < nums.length) {
    if (nums[pt1] === nums[pt2]) {
      console.log(nums[pt1], "vs", nums[pt2]);
      pt1++;
      temp = nums[pt2];
      while (pt2 < nums.length && nums[pt2] === temp) pt2++;
      nums[pt1] = temp;
    } else {
      console.log(nums[pt1], "vs", nums[pt2]);

      pt1++;
      nums[pt1] = nums[pt2];
      pt2++;
    }
    console.log("cur pointerr", pt1, pt2);
    console.log(nums);
  }

  return pt1;
};

removeDuplicates([0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3]);
