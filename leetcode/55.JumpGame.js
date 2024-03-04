// 13:00 시작
// 13:30 끝

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // start form the end

  const rec = (index) => {
    for (let i = 1; i <= index; i++) {
      if (index - i === 0 && nums[index - i] >= i) {
        console.log("POSSIBLE");
        return true;
      }
      if (nums[index - i] >= i) {
        console.log("index : ", index - i, " num : ", nums[index - i]);
        return rec(index - i);
      }
    }
    return false;
  };

  if (nums.length === 1) return true;
  return rec(nums.length - 1);
};

var canJump1 = function (nums) {
  let max = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    console.log(i + nums[i], max);
    // i + nums[i] : i번째 인덱스에서 자신이 가진 값만큼 갈 수 있는 최대 인덱스
    // max : 이전까지 포함해서 점프할 수 있는 최대 인덱스
    max = Math.max(i + nums[i], max);
    // 갈 수 있는 최대 인덱스가 검사하고 있는 i와 동일하다면 더는 점프할 수 없다는 의미
    if (i == max) return false;
  }
  return true;
};
console.log(canJump1([3, 1, 0, 1, 1]));
