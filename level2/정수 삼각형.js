// 14:26 시작

const solution = (triangle) => {
  const height = triangle.length;
  for (let i = height - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (triangle[i + 1][j] > triangle[i + 1][j + 1])
        triangle[i][j] = triangle[i][j] + triangle[i + 1][j];
      else triangle[i][j] = triangle[i][j] + triangle[i + 1][j + 1];
    }
  }
  return triangle[0][0];
};

solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]);
