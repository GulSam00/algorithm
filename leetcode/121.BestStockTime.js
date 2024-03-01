/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = 10000000000000000;
  let minIndex = 0;
  let max = 0;
  let maxIndex = 0;
  let sum = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min && i !== prices.length - 1) {
      min = prices[i];
      minIndex = i;
    }
    if (prices[i] > max && i !== 0) {
      max = prices[i];
      maxIndex = i;
    }
  }

  console.log(min, max);
  for (let i = minIndex + 1; i < prices.length; i++) {
    if (prices[i] - min > sum) sum = prices[i] - min;
  }
  console.log(sum);
  for (let i = 0; i < maxIndex; i++) {
    if (max - prices[i] > sum) sum = max - prices[i];
  }

  return sum;
};

var maxProfit1 = function (prices) {
  let left = 0; // Buy
  let right = 1; // sell
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; // our current profit

      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};
