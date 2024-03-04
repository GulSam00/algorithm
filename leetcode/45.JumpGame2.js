// 15:00 시작
// 16:30 끝
// 치팅

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 시간 오버
var jump = function (nums) {
  // start form the end
  let max = nums.length;
  const rec = (index, jumpCtn) => {
    for (let i = 1; i <= index; i++) {
      if (index - i === 0 && nums[index - i] >= i) {
        if (jumpCtn < max) max = jumpCtn;
        return;
      }
      if (nums[index - i] >= i) {
        rec(index - i, jumpCtn + 1);
      }
    }
  };
  if (nums.length === 1) return 0;
  rec(nums.length - 1, 1);

  return max;
};

const jump2 = (nums) => {
  const lastIndex = nums.length - 1;
  let jump = 0;
  let max = 0;
  let cur = 0;
  if (nums.length === 1) return jump;

  for (let i = 0; i < lastIndex; i++) {
    max = Math.max(max, i + nums[i]);
    console.log(i + nums[i]);
    if (i == cur) {
      jump++;
      cur = max;
      if (cur >= lastIndex) return jump;
    }
  }
  return jump;
};

console.log(jump2([1, 2, 8, 2, 4, 1, 1, 1, 1, 5, 1, 1, 1, 1]));
