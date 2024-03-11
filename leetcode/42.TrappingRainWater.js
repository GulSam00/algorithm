// 18:00 시작

/**
 * @param {number[]} height
 * @return {number}
 */
var wrongtrap = function (height) {
  // n : 가장 높이가 높은 블럭
  // m : n보다 같거나 그 다음으로 높은 블럭
  let total = 0;
  let cur = [];

  let pt = 0;
  let left = 0;
  let right = 0;

  // 먼저 높이가 1 이상인 블럭을 추적
  while (height[pt] === 0) pt++;
  left = height[pt];

  while (pt < height.length) {
    // left보다 높거나 같은 높이라면 하나의 물 웅덩이 생성된다
    if (left <= height[pt]) {
      console.log("cur : ", cur);
      left = height[pt];
      right = 0;
      if (cur.length) total += cur.reduce((acc, cur) => acc + cur);
      cur = [];
    } // left보다 낮으면 물이 쌓일 수 있는 상태. left에 height[pt]만큼 뺀 값을 누적
    else {
      if (right < height[pt]) right = height[pt];
      cur.push(left - height[pt]);
    }
    pt++;
  }
  console.log(cur);
  return total;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let n = height.length;
  let left = 0,
    right = n - 1,
    left_max = 0,
    right_max = 0,
    water = 0;
  while (left <= right) {
    if (height[left] <= height[right]) {
      if (height[left] > left_max) left_max = height[left];
      else water += left_max - height[left];
      left++;
    } else {
      if (height[right] > right_max) right_max = height[right];
      else water += right_max - height[right];
      right--;
    }
    console.log("left, right, Lmax, Rmax, water");
    console.log(left, right, left_max, right_max, water);
    let consoleLog = [];
    for (let max = 4; max >= 0; max--) {
      let low = "";
      for (let i = left; i < right; i++) {
        if (height[i] <= max) low += " ";
        else low += "O";
      }
      consoleLog.push(low);
    }
    consoleLog.forEach((log) => console.log(log));
  }
  return water;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
