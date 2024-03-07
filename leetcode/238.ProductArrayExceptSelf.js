var productExceptSelf = function (nums) {
  let isZero = 0;
  const max = nums.reduce((acc, cur) => {
    if (cur === 0) {
      isZero++;
      return acc;
    }
    if (acc === 0) {
      return cur;
    }
    return acc * cur;
  }, 0);
  console.log(isZero);
  for (let i = 0; i < nums.length; i++) {
    if (isZero === 1) {
      if (nums[i] === 0) nums[i] = max;
      else nums[i] = 0;
    } else if (isZero > 1) nums[i] = 0;
    else nums[i] = max / nums[i];
  }

  return nums;
};

console.log(productExceptSelf([0, 0]));
