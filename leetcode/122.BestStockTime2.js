/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = 0; // Buy
  let right = 1; // sell
  let cur_profit;
  let max_profit = 0;
  let total_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      cur_profit = prices[right] - prices[left]; // our current profit
      if (cur_profit > max_profit) max_profit = cur_profit;
      else {
        total_profit += max_profit;
        max_profit = 0;
        left = right;
      }
    } else {
      total_profit += max_profit;
      max_profit = 0;
      left = right;
    }
    console.log("left : right ");
    console.log(prices[left], " : ", prices[right]);
    console.log(cur_profit, max_profit);
    console.log(total_profit);

    right++;
  }
  return total_profit + max_profit;
};
var maxProfit2 = function (prices) {
  let left = 0;
  let right = 1;
  let total_profit = 0;
  while (right < prices.length) {
    if (prices[right] > prices[left])
      total_profit += prices[right] - prices[left];
    left++;
    right++;
  }
  return total_profit;
};

console.log("answer ", maxProfit([1, 2, 3, 4, 5]));
