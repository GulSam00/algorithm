// 21:24 start
// 21:51 end

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// 시간 O(m * n)
var merge1 = function (nums1, m, nums2, n) {
  let dst;

  const rec = (dst, curI, index) => {
    if (index === m + curI) return dst;

    let temp = nums1[index];
    nums1[index] = dst;
    return rec(temp, curI, index + 1);
  };

  for (i = 0; i < n; i++) {
    dst = nums2[i];
    for (let j = 0; j < m + i; j++) {
      if (dst < nums1[j]) {
        dst = rec(dst, i, j);
      }
    }
    nums1[m + i] = dst;
  }

  return nums1;
};

// 시간 O((m + n) log (m + n))

var merge2 = function (nums1, m, nums2, n) {
  for (i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }

  num1.sort((a, b) => a - b);

  return nums1;
};
// 시간 O(m + n)
var merge3 = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (0 <= p1 && 0 <= p2) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p--] = nums1[p1--];
    } else nums1[p--] = nums2[p2--];
  }

  while (0 <= p2) {
    nums1[p--] = nums2[p2--];
  }
  return nums1;
};

console.log(merge3([2, 4, 0, 0, 0], 2, [1, 3, 3], 3));
