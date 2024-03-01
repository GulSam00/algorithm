// var rotate = function (nums, k) {
//   k = k % nums.length;
//   const arr = [];
//   for (let i = nums.length - k; i < nums.length; i++) arr.push(nums[i]);
//   for (let i = 0; i < nums.length - k; i++) arr.push(nums[i]);

//   for (i = 0; i < nums.length; i++) {
//     nums[i] = arr[i];
//   }
// };

var rotate = function (nums, k) {
  const rotation = (nums, start, end) => {
    let temp;
    while (start < end) {
      temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  };

  let length = nums.length;
  k = k % length;
  rotation(nums, 0, length - 1);
  rotation(nums, 0, k - 1);
  rotation(nums, k, length - 1);

  console.log(nums);
};
rotate([1, 2, 3, 4, 5, 6, 7], 3);
