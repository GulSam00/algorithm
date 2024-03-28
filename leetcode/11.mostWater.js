// 10:36 시작
// 10:44 해결

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let answer = 0;
  let [left, right] = [0, height.length - 1];

  while (left < right) {
    const min = Math.min(height[left], height[right]);
    const width = right - left;
    const cur = min * width;
    if (answer < cur) answer = cur;
    if (height[left] <= height[right]) left++;
    else right--;
  }

  return answer;
};
