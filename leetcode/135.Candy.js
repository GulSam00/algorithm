// 15:50 시작
// 16:30 치팅

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let length = ratings.length;
  let prev = ratings[0];

  let totalCandy = 1;
  let up = 1;
  let down = 1;
  for (let i = 1; i < length; i++) {
    console.log("CUR : ", ratings[i]);
    if (ratings[i] > prev) {
      up++;
      down = 1;
      totalCandy += up;
    } else if (ratings[i] < prev) {
      totalCandy += down;
      up = 1;
      down++;
    } else {
      up = 1;
      down = 1;
      totalCandy++;
    }
    prev = ratings[i];
    console.log(totalCandy, up, down);
  }

  return totalCandy;
};

var candy1 = function (ratings) {
  let length = ratings.length;
  let candies = new Array(length).fill(1); // Initialize candies array with 1 candy for each child

  // Scan from left to right, give more candies to children with higher ratings than their left neighbors
  for (let i = 1; i < length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  // Scan from right to left, give more candies to children with higher ratings than their right neighbors
  for (let i = length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1); // Ensure to give more candies than the right neighbor if needed
    }
  }

  // Calculate total candies
  let totalCandy = candies.reduce((acc, curr) => acc + curr, 0);

  return totalCandy;
};

console.log(candy([1, 2, 87, 87, 87, 2, 1]));
